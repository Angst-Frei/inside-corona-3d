import ForceGraph3D from '3d-force-graph';
import * as dat from 'dat.gui';
import * as THREE from 'three';
import elementResizeDetectorMaker from 'element-resize-detector';
import UndirectedGraph from 'graphology';
//import Graph from 'graphology';
import louvain from 'graphology-communities-louvain';
import simmelianStrength from 'graphology-metrics/edge/simmelian-strength';
import pagerank from 'graphology-metrics/centrality/pagerank';
//import reverse from 'graphology-operators/reverse';
import {bidirectional} from 'graphology-shortest-path/unweighted';
import {edgePathFromNodePath} from 'graphology-shortest-path/utils';
import {bfsFromNode} from 'graphology-traversal/bfs';

import './css/inside-corona.css';

var VERSION = require("../package.json").version;

const generalText = `<h1>Inside Corona 3D</h1>
    <p>3D visualization of the basics of the book Inside Corona by Thomas Röper.</p>
    <p>Version: ` + VERSION + `
    <p>The color of the links reflects the communites detected by the <a href="https://en.wikipedia.org/wiki/Louvain_method" target = "_blank">Louvain</a> algorithm. The size of the nodes reflects the undirected ranking with the <a href="https://en.wikipedia.org/wiki/PageRank" target="_blank">PageRank</a> algorithm.</p>
    <p>Contact: <a href="mailto:3d-graph@protonmail.com">3d-graph@protonmail.com</a><br/>
    You are free to download and republish <a href="https://drive.proton.me/urls/MVA97X3B1R#B0X2ad7loneh">this site</a>.</p>
    <p>This site was created with the following open source software:<br/>
    <a href="https://github.com/vasturiano/3d-force-graph" target="_blank">3D Force-Directed Graph</a><br/>
    <a href="https://threejs.org/" target="_blank">three.js</a><br/>
    <a href="https://graphology.github.io/" target="_blank">Graphology</a></p>`

const helpText = `<h1>Help</h1>
    <h2>Navigate</h2>
    <p>Left-click: Select and show info<br/>
    Mouse-wheel/middle-click: Zoom in<br/>
    Right-click: Add node to filter<br/>
    Shortest Path: Select node and shift-click a second node to show the shortest path</p>
    <h2>Settings</h2>
    <h3>General</h3>
    <p>Simplify: Reduce the complexity by increasing the number of required neighbors<br/>
    Link Length: Disable Link Force and show links with the configured length<br/>
    Hide Info Panel: Hide the Info Panel<br/>
    Search: Search for nodes and links using regular expressions<br/>
    Filter: Filter (exclude/include) nodes<br/>
    Filter Soley Nodes: Remove nodes with no neighbors<br/>
    Zoom To Fit: Fit graph to screen<br/>
    Show Help: Show this help</p>
    <h3>Advanced</h3>
    <p>Orientation: Different layouts<br/>
    Dimension: Switching from 3 to 2 dimensionis to change the layout<br/>
    Link Force: Enable Link Force by respecting the number of neighbors of the connected nodes<br/>
    Louvain-Communities: Communities discovered with the Louvain algorithm</p>`;

const infoDiv = document.getElementById('info');
infoDiv.innerHTML = generalText;
const graphDiv = document.getElementById('graph');

const graph = new UndirectedGraph();
//const graph = new Graph();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  }, { passive: true });
}

fetch('json/inside-corona.json').then(res => res.json()).then(gData => {

  gData.nodes.forEach(node => {
    graph.addNode(node.id)
  });
  gData.links.forEach(link => {
    graph.addUndirectedEdgeWithKey(link.id, link.source, link.target);
    //graph.addEdgeWithKey(link.id, link.source, link.target);
  });

  console.log('Number of nodes', graph.order);
  console.log('Number of edges', graph.size);

  louvain.assign(graph, {getEdgeWeight: null});
  let details = louvain.detailed(graph);
  console.log(details);

  simmelianStrength.assign(graph);

  const centralityAlgo = pagerank;
  const centralityName = Object.keys({pagerank}).pop();

  //const reversedGraph = reverse(graph);
  //centralityAlgo.assign(graph, {getEdgeWeight: (_, attr) => attr.simmelianStrength + 1});
  centralityAlgo.assign(graph);
  let centralityRange = graph.mapNodes((node, attributes) => attributes[centralityName]);
  let centralityMin = Math.min(...centralityRange)
  let centralityMax = Math.max(...centralityRange)

  gData.nodes.forEach(node => {
    node.community = graph.getNodeAttribute(node.id, 'community');
    let centralityValue = graph.getNodeAttribute(node.id, centralityName);
    node.centrality = centralityValue;
    node.value = Number(linearScale(centralityValue,centralityMin,centralityMax,1,20).toFixed(2));
  });

  gData.links.forEach(link => {
    link.simmelianStrength = graph.getEdgeAttribute(link.id, 'simmelianStrength');
  });

  gData.links.forEach(link => {
    const a = gData.nodes[link.source];
    const b = gData.nodes[link.target];
    !a.neighbors && (a.neighbors = []);
    !b.neighbors && (b.neighbors = []);
    a.neighbors.push(b);
    b.neighbors.push(a);

    !a.links && (a.links = []);
    !b.links && (b.links = []);
    a.links.push(link);
    b.links.push(link);
  });

  const communities = [ ...Array(details.count).keys() ];

  const highlightNodes = new Set();
  const highlightLinks = new Set();
  let selectedNode = null;
  let selectedLink = null;
  let excludeFilter = [];
  let includeFilter = [];

  const Graph = ForceGraph3D()
    (graphDiv)
    .nodeThreeObject(node => {
      const imgTexture = new THREE.TextureLoader().load(`${node.image}`);
      const material = new THREE.SpriteMaterial({ map: imgTexture });
      const sprite = new THREE.Sprite(material);
      //sprite.scale.set(14, 14);
      let size = linearScale(node.centrality,centralityMin,centralityMax,10,50);
      sprite.scale.set(size,size);
      return sprite;
    })
    .height(graphDiv.offsetHeight)
    .showNavInfo(false)
    .graphData(gData)
    .dagMode(null)
    .nodeLabel('title')
    .linkLabel('title')
    .linkWidth(link => highlightLinks.has(link) ? 5 : 1)
    .linkAutoColorBy(d => gData.nodes[d.source].community)
    .linkOpacity(0.4)
    .linkDirectionalParticles(link => highlightLinks.has(link) ? 2 : 0)
    .linkDirectionalParticleColor(() => 'red')
    .linkDirectionalParticleSpeed(0.005)
    .linkDirectionalParticleWidth(5)
    .onBackgroundClick(node => {
      highlightNodes.clear();
      highlightLinks.clear();
      updateHighlight();
      selectedNode = null;
    })
    .onNodeClick((node, event) => {
      highlightNodes.clear();
      highlightLinks.clear();
      if (node && (node == selectedNode)) {
        info.innerHTML = generalText
        updateHighlight();
        selectedNode = null;
      } else if ((event.ctrlKey || event.shiftKey || event.altKey) && (node != selectedNode)) {
        updateShortest(selectedNode.id, node.id);
        selectedNode = node;
      } else if (node && (node != selectedNode)) {
        highlightNodes.add(node);
        node.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
        node.links.forEach(link => highlightLinks.add(link));
        info.innerHTML = "<h2>" + node.title + "</h2><img src=\"" + node.image + "\" align=\"left\"><p>Group: " + node.group + "<br/>Importance: " + node.value + "</p><p>" + node.notes + "</p>";
        selectedNode = node;
        updateHighlight();
      }
    })
    .onNodeRightClick(node => {
      if (settings.Filtermode == "include" && !includeFilter.includes(node.title)) {
        includeFilter.push(node.title);
        console.log("Include-Filter");
        console.log(includeFilter);
        console.log("Exclude-Filter");
        console.log(excludeFilter);
      } else if (settings.Filtermode == "exclude" && !excludeFilter.includes(node.title)){
        excludeFilter.push(node.title);
        console.log("Include-Filter");
        console.log(includeFilter);
        console.log("Exclude-Filter");
        console.log(excludeFilter);
      } else {
        return;
      }
      let { nodes, links } = updateNodes();
      Graph
       .graphData({ nodes, links })
      Graph.numDimensions(settings.Dimensions);
      // Aim at node from outside it
      //const distance = 40;
      //const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
      //Graph.cameraPosition(
      //  { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
      //  node, // lookAt ({ x, y, z })
      //  3000  // ms transition duration
      //);
    })
    .onNodeDragEnd(node => {
      node.fx = node.x;
      node.fy = node.y;
      node.fz = node.z;
    })
    .onLinkClick(link => {
      highlightNodes.clear();
      highlightLinks.clear();
      if (link && (link == selectedLink)) {
        info.innerHTML = generalText;
        updateHighlight();
        selectedLink = null;
      } else if (link && (link != selectedLink)) {
        highlightLinks.add(link);
        highlightNodes.add(link.source);
        highlightNodes.add(link.target);
        info.innerHTML = "<h2>" + link.title + "</h2><img src=\"" + link.source.image + "\"><img src=\"img/Arrow-Right.png\"><img src=\"" + link.target.image + "\"><span><p>Source: " +  link.source.title + "<br/>Target: " + link.target.title + "</p></span>";
        selectedLink = link;
        updateHighlight();
      }
    });

  elementResizeDetectorMaker().listenTo(
    graphDiv,
    el => Graph.width(el.offsetWidth)
  );

  const settings = { 'Orientation': null, 'Link Length': 40, 'Dimensions': 3, 'Search': '', 'Simplify': 1, 'Link Force': false, 'Hide Info Panel': false, 'Searchmode': 'highlight', 'Filtermode': 'include', 'Depth': 1};
  const gui = new dat.GUI();

  const generalFolder = gui.addFolder('General');
  generalFolder.add(settings, 'Simplify', 1, 10, 1).listen().onChange( function() {
    let { nodes, links } = updateNodes();
    Graph
     .graphData({ nodes, links })
    Graph.numDimensions(settings.Dimensions);
  });
  generalFolder.add(settings, 'Link Length', 0, 200).listen().onChange( function() {
    updateLinkDistance()
  });
  generalFolder.add(settings, 'Hide Info Panel').listen().onChange( function() { 
    if (settings['Hide Info Panel']) {
      infoDiv.style.display = "none";
    } else {
      infoDiv.style.display = "block";
    }
  });
  generalFolder.open();

  const searchFolder = gui.addFolder('Search / Filter');
  searchFolder.add(settings, 'Searchmode', ['highlight', 'filter'])
  const searchField = searchFolder.add(settings, 'Search').listen().onFinishChange( function(searchString) {
    if (settings.Searchmode == "highlight") {
      updateNodeSelection();
    } else {
      let { nodes, links } = updateNodes();
      Graph
       .graphData({ nodes, links })
      Graph.numDimensions(settings.Dimensions);
    }
  });
  searchFolder.add(settings, 'Filtermode', ['include', 'exclude']).listen()
    //.onChange(mode => elementFilter = []);
  searchFolder.add(settings, 'Depth', 1, 4, 1).listen().onChange( function() {
    let { nodes, links } = updateNodes();
    Graph
     .graphData({ nodes, links })
    Graph.numDimensions(settings.Dimensions);
  });

  const groupsFolder = gui.addFolder('Groups');
  gData.groups.forEach((group) => {
    settings[group] = true;
    groupsFolder.add(settings, group).listen().onChange( function() {
      let { nodes, links } = updateNodes();
      Graph
       .graphData({ nodes, links })
      Graph.numDimensions(settings.Dimensions);
    });
  });

  const advancedFolder = gui.addFolder('Advanced');
  advancedFolder.add(settings, 'Orientation', [null, 'td', 'bu', 'lr', 'rl', 'zout', 'zin', 'radialout', 'radialin'])
    .onChange(orientation => Graph && Graph.dagMode(orientation) && Graph.numDimensions(settings.Dimensions));
  advancedFolder.add(settings, 'Dimensions', ['2', '3'])
    .onChange(mode => Graph && Graph.dagMode(settings.Orientation) && Graph.numDimensions(mode));
  advancedFolder.add(settings, 'Link Force').listen().onChange( function() {
    updatePhysics();
  });

  const communityFolder = advancedFolder.addFolder('Louvain-Communities');
  communities.forEach((community) => {
    settings[community] = true;
    communityFolder.add(settings, community).listen().onChange( function() {
      let { nodes, links } = updateNodes();
      Graph
       .graphData({ nodes, links })
      Graph.numDimensions(settings.Dimensions);
    });
  });

  const filterSoley = {
    add:function() {
      removeSoley();
    }
  };
  gui.add(filterSoley, 'add').name('Filter Soley Nodes'); 
  const zoom = {
    add:function() {
      Graph.zoomToFit(400) 
    }
  };
  gui.add(zoom, 'add').name('Zoom To Fit'); 
  const reset = {
    add:function() {
      resetValues();
    }
  };
  const resetButton = gui.add(reset, 'add').name('Reset Filter'); 
  const help = {
    add:function() {
      infoDiv.innerHTML = helpText
    }
  };
  gui.add(help, 'add').name('Show Help'); 

  function updateNodes() {
    let nodes = gData.nodes;
    let links = gData.links;

    if (settings.Simplify > 1) {
      nodes = nodes.filter(n => n.neighbors.length >= settings.Simplify)
      let nodeIDs = nodes.map(n => n.id);
      links = links.filter(l => nodeIDs.includes(l.source.id) && nodeIDs.includes(l.target.id));
    }

    let groupIDs = [];
    gData.groups.forEach((group) => {
      if (settings[group]) {
        let newNodes = gData.nodes.filter(n => n.group == group);
        let newGroupIDs = newNodes.map(n => n.id);
        groupIDs = groupIDs.concat(newGroupIDs);
      };
    });
    groupIDs = [...new Set(groupIDs)];
    nodes = nodes.filter(n => groupIDs.includes(n.id));
    links = links.filter(l => groupIDs.includes(l.source.id) && groupIDs.includes(l.target.id));

    let communityIDs = [];
    communities.forEach((community) => {
      if (settings[community]) {
        let newNodes = gData.nodes.filter(n => n.community == community);
        let newCommunityIDs = newNodes.map(n => n.id);
        communityIDs = communityIDs.concat(newCommunityIDs);
      };
    });
    communityIDs = [...new Set(communityIDs)];
    nodes = nodes.filter(n => communityIDs.includes(n.id));
    links = links.filter(l => communityIDs.includes(l.source.id) && communityIDs.includes(l.target.id));

    if (searchField.object.Search !== "" && settings.Searchmode == "filter") {
      let filter = searchField.object.Search.replace(/[.*+?{}()[\]\\]/g, '\\$&');
      let regexp = new RegExp(filter, 'gi');
      let newNodes = nodes.filter(n => n.title.match(regexp));
      let newLinks = links.filter(l => l.title.match(regexp));
      let searchNodeIDs = newNodes.map(n => n.id);
      let newNodeIDs = newNodes.map(n => n.neighbors.map(nb => nb.id)).flat();
      searchNodeIDs = searchNodeIDs.concat(newNodeIDs);
      let newSourceIDs = newLinks.map(l => l.source.id);
      let newTargetIDs = newLinks.map(l => l.target.id);
      searchNodeIDs = searchNodeIDs.concat(newSourceIDs).concat(newTargetIDs);
      searchNodeIDs = [...new Set(searchNodeIDs)];
      nodes = nodes.filter(n => searchNodeIDs.includes(n.id));
      links = links.filter(l => searchNodeIDs.includes(l.source.id) && searchNodeIDs.includes(l.target.id));
    }

    if (includeFilter.length > 0) {
      let filter = ("^" + includeFilter.join("$|^") + "$").replace(/[.*+?{}()[\]\\]/g, '\\$&');
      let regexp = new RegExp(filter, 'gi');
      let newNodes = nodes.filter(n => n.title.match(regexp));
      let filterIDs = newNodes.map(n => n.id);
      let newFilterIDs = []
      filterIDs.forEach(nodeid => {
        bfsFromNode(graph, nodeid, function (node, attr, depth) {
          if (depth <= settings.Depth) newFilterIDs.push(Number(node)) 
        });
      });
      filterIDs = filterIDs.concat(newFilterIDs);
      filterIDs = [...new Set(filterIDs)];
      nodes = nodes.filter(n => filterIDs.includes(n.id));
      links = links.filter(l => filterIDs.includes(l.source.id) && filterIDs.includes(l.target.id));
    }
    if (excludeFilter.length > 0) {
      let filter = ("^" + excludeFilter.join("$|^") + "$").replace(/[.*+?{}()[\]\\]/g, '\\$&');
      let regexp = new RegExp(filter, 'gi');
      let newNodes = nodes.filter(n => n.title.match(regexp));
      let filterIDs = newNodes.map(n => n.id);
      if (settings.Depth > 1) {
        let newFilterIDs = []
        filterIDs.forEach(nodeid => {
          bfsFromNode(graph, nodeid, function (node, attr, depth) {
            if (depth <= settings.Depth - 1 ) newFilterIDs.push(Number(node)) 
          });
        });
        filterIDs = filterIDs.concat(newFilterIDs);
      }
      filterIDs = [...new Set(filterIDs)];
      nodes = nodes.filter(n => !filterIDs.includes(n.id));
      links = links.filter(l => !filterIDs.includes(l.source.id) && !filterIDs.includes(l.target.id));
    }
    if (includeFilter.length > 0 || excludeFilter.length > 0) {
      resetButton.__li.style = "border-left: 3px solid #1de675;"
    } else {
      resetButton.__li.style = "border-left: 3px solid #e61d5f;"
    }
    return { nodes, links }
  }

  function updateLinkDistance() {
    settings['Link Force'] = false
    Graph
      .d3Force('link')
      .distance(settings['Link Length'])
    Graph.numDimensions(settings.Dimensions); // Re-heat simulation
  }

  function updatePhysics() {
    if (settings['Link Force']) {
      Graph
        .d3Force('link')
        .distance(link => (1 / (link.simmelianStrength + link.source.neighbors.length + link.target.neighbors.length)) * 1000)
      Graph.numDimensions(settings.Dimensions); // Re-heat simulation
    } else {
      Graph
        .d3Force('link')
        .distance(settings['Link Length'])
      Graph.numDimensions(settings.Dimensions); // Re-heat simulation
    }
  }

  function updateNodeSelection() {
    let { nodes, links } = updateNodes();

    highlightNodes.clear();
    highlightLinks.clear();

    if (searchField.object.Search !== "") {
      let filter = searchField.object.Search.replace(/[.*+?{}()[\]\\]/g, '\\$&');
      let regexp = new RegExp(filter, 'gi');
      nodes = nodes.filter(n => n.title.match(regexp));
      links = links.filter(l => l.title.match(regexp));
      nodes.forEach(node => {
        highlightNodes.add(node);
        node.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
        node.links.forEach(link => highlightLinks.add(link));
      });
      links.forEach(link => highlightLinks.add(link));
    }
    updateHighlight()
  }

  function removeSoley() {
    let { nodes, links } = Graph.graphData();
    let nodeIDs = nodes.map(n => n.id);
    nodes = nodes.filter(n => nodeIDs.some(id => n.neighbors.map(nb => nb.id).includes(id)));
    Graph.graphData({ nodes, links });
    Graph.numDimensions(settings.Dimensions);
  }

  function resetValues() {
    highlightNodes.clear();
    highlightLinks.clear();
    selectedNode = null;
    excludeFilter.length = 0;
    includeFilter.length = 0;
    let { nodes, links } = updateNodes();
    Graph.graphData({ nodes, links })
    Graph.numDimensions(settings.Dimensions);
  }

  function updateShortest(source, target) {
    let nodes = gData.nodes;
    let links = gData.links;

    let nodePath = bidirectional(graph, source, target);
    let edgePath = edgePathFromNodePath(graph, nodePath);
    links = links.filter(l => edgePath.includes(String(l.id)));

    highlightNodes.clear();
    highlightLinks.clear();

    let html = "<h2>Shortest Path</h2><p>";
    nodePath.forEach(id => {
      let node = gData.nodes[id];
      highlightNodes.add(node);
      html = html.concat(node.title + " (" + node.group + ")<br/>");
    });
    html.concat("</p>")
    infoDiv.innerHTML = html

    links.forEach(link => highlightLinks.add(link));

    updateHighlight();
  }

  function updateHighlight() {
    // trigger update of highlighted objects in scene
    Graph
      .linkWidth(Graph.linkWidth())
      .linkDirectionalParticles(Graph.linkDirectionalParticles());
  }

  function linearScale(value_in_old_scale, old_scale_minimum, old_scale_maximum, new_scale_minimum, new_scale_maximum){
    const old_scale_range = old_scale_maximum - old_scale_minimum ,new_scale_range = new_scale_maximum - new_scale_minimum;
       
    let value_in_new_scale = (((value_in_old_scale - old_scale_minimum) * new_scale_range) / old_scale_range) + new_scale_minimum;
    return value_in_new_scale;
  }


});

