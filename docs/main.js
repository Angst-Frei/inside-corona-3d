(()=>{"use strict";var e,n={8138:(e,n,i)=>{var t=i(5689),o=i(4376),l=i(9477),r=i(3844),a=i.n(r),s=i(2698),d=i.n(s),c=i(9315),h=i.n(c),g=i(3474),u=i.n(g),f=i(5193),m=i.n(f),p=i(3171),k=i(1529),b=i(3181);const D='<h1>Inside Corona 3D</h1>\n    <p>3D visualization of the basics of the book Inside Corona by Thomas Röper.</p>\n    <p>The color of the links reflects the communites detected with <a href="https://en.wikipedia.org/wiki/Louvain_method" target = "_blank">Louvain</a> algorithm. The size of the nodes reflects the undirected ranking with <a href="https://en.wikipedia.org/wiki/PageRank" target="_blank">PageRank</a> algorithm.</p>\n    <p><a href="mailto:3d-graph@protonmail.com">3d-graph@protonmail.com</a><br/>\n    Download the <a href="inside-corona.zip">webpage</a></p>\n    <p>This website was created with the following opensource software:<br/>\n    <a href="https://github.com/vasturiano/3d-force-graph" target="_blank">3D Force-Directed Graph</a><br/>\n    <a href="https://threejs.org/" target="_blank">three.js</a><br/>\n    <a href="https://graphology.github.io/" target="_blank">Graphology</a></p>',y=document.getElementById("info");y.innerHTML=D;const w=document.getElementById("graph"),S=new(d());fetch("json/inside-corona.json").then((e=>e.json())).then((e=>{e.nodes.forEach((e=>{S.addNode(e.id)})),e.links.forEach((e=>{S.addUndirectedEdgeWithKey(e.id,e.source,e.target)})),console.log("Number of nodes",S.order),console.log("Number of edges",S.size),h().assign(S,{getEdgeWeight:null});let n=h().detailed(S);console.log(n),u().assign(S);const i=m(),r=Object.keys({pagerank:m()}).pop();i.assign(S);let s=S.mapNodes(((e,n)=>n[r])),d=Math.min(...s),c=Math.max(...s);e.nodes.forEach((e=>{e.community=S.getNodeAttribute(e.id,"community");let n=S.getNodeAttribute(e.id,r);e.centrality=n,e.value=Number(B(n,d,c,1,20).toFixed(2))})),e.links.forEach((e=>{e.simmelianStrength=S.getEdgeAttribute(e.id,"simmelianStrength")})),e.links.forEach((n=>{const i=e.nodes[n.source],t=e.nodes[n.target];!i.neighbors&&(i.neighbors=[]),!t.neighbors&&(t.neighbors=[]),i.neighbors.push(t),t.neighbors.push(i),!i.links&&(i.links=[]),!t.links&&(t.links=[]),i.links.push(n),t.links.push(n)}));const g=[...Array(n.count).keys()],f=new Set,F=new Set;let v=null,E=null,L=[],C=[];const x=(0,t.Z)()(w).nodeThreeObject((e=>{const n=(new l.dpR).load(`${e.image}`),i=new l.xeV({map:n}),t=new l.jyi(i);let o=B(e.centrality,d,c,10,50);return t.scale.set(o,o),t})).height(w.offsetHeight).showNavInfo(!1).graphData(e).dagMode(null).nodeLabel("title").linkLabel("title").linkWidth((e=>F.has(e)?5:1)).linkAutoColorBy((n=>e.nodes[n.source].community)).linkOpacity(.4).linkDirectionalParticles((e=>F.has(e)?2:0)).linkDirectionalParticleColor((()=>"red")).linkDirectionalParticleSpeed(.005).linkDirectionalParticleWidth(5).onBackgroundClick((e=>{f.clear(),F.clear(),G(),v=null})).onNodeClick(((n,i)=>{f.clear(),F.clear(),n&&n==v?(info.innerHTML=D,G(),v=null):(i.ctrlKey||i.shiftKey||i.altKey)&&n!=v?(function(n,i){e.nodes;let t=e.links,o=(0,p.Ar)(S,n,i),l=(0,k.B)(S,o);t=t.filter((e=>l.includes(String(e.id)))),f.clear(),F.clear();let r="<h2>Shortest Path</h2><p>";o.forEach((n=>{let i=e.nodes[n];f.add(i),r=r.concat(i.title+" ("+i.group+")<br/>")})),r.concat("</p>"),y.innerHTML=r,t.forEach((e=>F.add(e))),G()}(v.id,n.id),v=n):n&&n!=v&&(f.add(n),n.neighbors.forEach((e=>f.add(e))),n.links.forEach((e=>F.add(e))),info.innerHTML="<h2>"+n.title+'</h2><img src="'+n.image+'" align="left"><p>Group: '+n.group+"<br/>Importance: "+n.value+"</p><p>"+n.notes+"</p>",v=n,G())})).onNodeRightClick((e=>{if("include"!=j.Filtermode||C.includes(e.title)){if("exclude"!=j.Filtermode||L.includes(e.title))return;L.push(e.title),console.log("Include-Filter"),console.log(C),console.log("Exclude-Filter"),console.log(L)}else C.push(e.title),console.log("Include-Filter"),console.log(C),console.log("Exclude-Filter"),console.log(L);let{nodes:n,links:i}=W();x.graphData({nodes:n,links:i}),x.numDimensions(j.Dimensions)})).onNodeDragEnd((e=>{e.fx=e.x,e.fy=e.y,e.fz=e.z})).onLinkClick((e=>{f.clear(),F.clear(),e&&e==E?(info.innerHTML=D,G(),E=null):e&&e!=E&&(F.add(e),f.add(e.source),f.add(e.target),info.innerHTML="<h2>"+e.title+'</h2><img src="'+e.source.image+'"><img src="img/Arrow-Right.png"><img src="'+e.target.image+'"><span><p>Source: '+e.source.title+"<br/>Target: "+e.target.title+"</p></span>",E=e,G())}));a()().listenTo(w,(e=>x.width(e.offsetWidth)));const j={Orientation:null,"Link Length":40,Dimensions:3,Search:"",Simplify:1,"Link Force":!1,"Hide Info Panel":!1,Searchmode:"highlight",Filtermode:"include",Depth:1},O=new o.XS,T=O.addFolder("General");T.add(j,"Simplify",1,10,1).listen().onChange((function(){let{nodes:e,links:n}=W();x.graphData({nodes:e,links:n}),x.numDimensions(j.Dimensions)})),T.add(j,"Link Length",0,200).listen().onChange((function(){j["Link Force"]=!1,x.d3Force("link").distance(j["Link Length"]),x.numDimensions(j.Dimensions)})),T.add(j,"Hide Info Panel").listen().onChange((function(){j["Hide Info Panel"]?y.style.display="none":y.style.display="block"})),T.open();const H=O.addFolder("Search / Filter");H.add(j,"Searchmode",["highlight","filter"]);const N=H.add(j,"Search").listen().onFinishChange((function(e){if("highlight"==j.Searchmode)!function(){let{nodes:e,links:n}=W();if(f.clear(),F.clear(),""!==N.object.Search){let i=N.object.Search.replace(/[.*+?{}()[\]\\]/g,"\\$&"),t=new RegExp(i,"gi");e=e.filter((e=>e.title.match(t))),n=n.filter((e=>e.title.match(t))),e.forEach((e=>{f.add(e),e.neighbors.forEach((e=>f.add(e))),e.links.forEach((e=>F.add(e)))})),n.forEach((e=>F.add(e)))}G()}();else{let{nodes:e,links:n}=W();x.graphData({nodes:e,links:n}),x.numDimensions(j.Dimensions)}}));H.add(j,"Filtermode",["include","exclude"]).listen(),H.add(j,"Depth",1,4,1).listen().onChange((function(){let{nodes:e,links:n}=W();x.graphData({nodes:e,links:n}),x.numDimensions(j.Dimensions)}));const P=O.addFolder("Groups");e.groups.forEach((e=>{j[e]=!0,P.add(j,e).listen().onChange((function(){let{nodes:e,links:n}=W();x.graphData({nodes:e,links:n}),x.numDimensions(j.Dimensions)}))}));const _=O.addFolder("Advanced");_.add(j,"Orientation",[null,"td","bu","lr","rl","zout","zin","radialout","radialin"]).onChange((e=>x&&x.dagMode(e)&&x.numDimensions(j.Dimensions))),_.add(j,"Dimensions",["2","3"]).onChange((e=>x&&x.dagMode(j.Orientation)&&x.numDimensions(e))),_.add(j,"Link Force").listen().onChange((function(){j["Link Force"]?(x.d3Force("link").distance((e=>1/(e.simmelianStrength+e.source.neighbors.length+e.target.neighbors.length)*1e3)),x.numDimensions(j.Dimensions)):(x.d3Force("link").distance(j["Link Length"]),x.numDimensions(j.Dimensions))}));const M=_.addFolder("Louvain-Communities");g.forEach((e=>{j[e]=!0,M.add(j,e).listen().onChange((function(){let{nodes:e,links:n}=W();x.graphData({nodes:e,links:n}),x.numDimensions(j.Dimensions)}))}));const R={add:function(){!function(){let{nodes:e,links:n}=x.graphData(),i=e.map((e=>e.id));e=e.filter((e=>i.some((n=>e.neighbors.map((e=>e.id)).includes(n))))),x.graphData({nodes:e,links:n}),x.numDimensions(j.Dimensions)}()}};O.add(R,"add").name("Filter Soley Nodes");const I={add:function(){x.zoomToFit(400)}};O.add(I,"add").name("Zoom To Fit");const A={add:function(){!function(){f.clear(),F.clear(),v=null,L.length=0,C.length=0;let{nodes:e,links:n}=W();x.graphData({nodes:e,links:n}),x.numDimensions(j.Dimensions)}()}},z=O.add(A,"add").name("Reset Filter"),$={add:function(){y.innerHTML="<h1>Help</h1>\n    <h2>Navigation</h2>\n    <p>Left-Click: Select and show info<br/>\n    Mouse-Wheel/Middle-Click: Zoom<br/>\n    Right-Click: Add node to filter<br/>\n    Shortest-Path: Select node and shift-select a second node to show the shortest path</p>\n    <h2>Settings</h2>\n    <h3>General</h3>\n    <p>Simplify: Reduce the complexity by increasing the number of required neighbors<br/>\n    Link Length: Disable Link-Force and display links with the configured length<br/>\n    Hide Info Panel: Hide the bottom screen area with the information about nodes and links<br/>\n    Search: Search for nodes and links with regular expressions<br/>\n    Filter: Filter (exclude/include) nodes<br/>\n    Filter Soley Nodes: Remove nodes without neighbors<br/>\n    Zoom To Fit: Fit graph to screen<br/>\n    Show Help: Show this help</p>\n    <h3>Advanced</h3>\n    <p>Orientation: Different layouts<br/>\n    Dimension: Switch from 3 to 2 dimension to change layout<br/>\n    Link Force: Enable Link-Force by respecting the number of neighbors of the attached nodes<br/>\n    Louvain-Communities: Communities detected with Louvain algorithm</p>"}};function W(){let n=e.nodes,i=e.links;if(j.Simplify>1){n=n.filter((e=>e.neighbors.length>=j.Simplify));let e=n.map((e=>e.id));i=i.filter((n=>e.includes(n.source.id)&&e.includes(n.target.id)))}let t=[];e.groups.forEach((n=>{if(j[n]){let i=e.nodes.filter((e=>e.group==n)).map((e=>e.id));t=t.concat(i)}})),t=[...new Set(t)],n=n.filter((e=>t.includes(e.id))),i=i.filter((e=>t.includes(e.source.id)&&t.includes(e.target.id)));let o=[];if(g.forEach((n=>{if(j[n]){let i=e.nodes.filter((e=>e.community==n)).map((e=>e.id));o=o.concat(i)}})),o=[...new Set(o)],n=n.filter((e=>o.includes(e.id))),i=i.filter((e=>o.includes(e.source.id)&&o.includes(e.target.id))),""!==N.object.Search&&"filter"==j.Searchmode){let e=N.object.Search.replace(/[.*+?{}()[\]\\]/g,"\\$&"),t=new RegExp(e,"gi"),o=n.filter((e=>e.title.match(t))),l=i.filter((e=>e.title.match(t))),r=o.map((e=>e.id)),a=o.map((e=>e.neighbors.map((e=>e.id)))).flat();r=r.concat(a);let s=l.map((e=>e.source.id)),d=l.map((e=>e.target.id));r=r.concat(s).concat(d),r=[...new Set(r)],n=n.filter((e=>r.includes(e.id))),i=i.filter((e=>r.includes(e.source.id)&&r.includes(e.target.id)))}if(C.length>0){let e=("^"+C.join("$|^")+"$").replace(/[.*+?{}()[\]\\]/g,"\\$&"),t=new RegExp(e,"gi"),o=n.filter((e=>e.title.match(t))).map((e=>e.id)),l=[];o.forEach((e=>{(0,b.a)(S,e,(function(e,n,i){i<=j.Depth&&l.push(Number(e))}))})),o=o.concat(l),o=[...new Set(o)],n=n.filter((e=>o.includes(e.id))),i=i.filter((e=>o.includes(e.source.id)&&o.includes(e.target.id)))}if(L.length>0){let e=("^"+L.join("$|^")+"$").replace(/[.*+?{}()[\]\\]/g,"\\$&"),t=new RegExp(e,"gi"),o=n.filter((e=>e.title.match(t))).map((e=>e.id));if(j.Depth>1){let e=[];o.forEach((n=>{(0,b.a)(S,n,(function(n,i,t){t<=j.Depth-1&&e.push(Number(n))}))})),o=o.concat(e)}o=[...new Set(o)],n=n.filter((e=>!o.includes(e.id))),i=i.filter((e=>!o.includes(e.source.id)&&!o.includes(e.target.id)))}return C.length>0||L.length>0?z.__li.style="border-left: 3px solid #1de675;":z.__li.style="border-left: 3px solid #e61d5f;",{nodes:n,links:i}}function G(){x.linkWidth(x.linkWidth()).linkDirectionalParticles(x.linkDirectionalParticles())}function B(e,n,i,t,o){return(e-n)*(o-t)/(i-n)+t}O.add($,"add").name("Show Help")}))}},i={};function t(e){var o=i[e];if(void 0!==o)return o.exports;var l=i[e]={exports:{}};return n[e].call(l.exports,l,l.exports,t),l.exports}t.m=n,e=[],t.O=(n,i,o,l)=>{if(!i){var r=1/0;for(c=0;c<e.length;c++){for(var[i,o,l]=e[c],a=!0,s=0;s<i.length;s++)(!1&l||r>=l)&&Object.keys(t.O).every((e=>t.O[e](i[s])))?i.splice(s--,1):(a=!1,l<r&&(r=l));if(a){e.splice(c--,1);var d=o();void 0!==d&&(n=d)}}return n}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[i,o,l]},t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={179:0};t.O.j=n=>0===e[n];var n=(n,i)=>{var o,l,[r,a,s]=i,d=0;if(r.some((n=>0!==e[n]))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(s)var c=s(t)}for(n&&n(i);d<r.length;d++)l=r[d],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(c)},i=self.webpackChunkinside_corona_3d=self.webpackChunkinside_corona_3d||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))})();var o=t.O(void 0,[715],(()=>t(8138)));o=t.O(o)})();