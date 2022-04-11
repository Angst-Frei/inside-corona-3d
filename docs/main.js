(()=>{"use strict";var e,n={8138:(e,n,i)=>{var t=i(5689),o=i(4376),l=i(9477),a=i(3844),r=i.n(a),s=i(2698),d=i.n(s),c=i(9315),h=i.n(c),u=i(3474),g=i.n(u),f=i(5193),m=i.n(f),p=i(3171),k=i(1529),b=i(3181);const D=new(d()),y='<h2>General</h2>\n    <p>The color of the links reflects the communites detected with <a href="https://graphology.github.io/standard-library/communities-louvain.html" target = "_blank">Louvain algorithm</a></p>\n    <h2>Navigation</h2>\n    <p>Click: Show info and connections<br/>\n    Mouse-Wheel/Middle-Click: Zoom<br/>\n    Right-Click: Add node to Filter<br/>\n    Shortest-Path: Select Node and Shift-Select a second node to show the shortest path</p>\n    <h2>Settings</h2>\n    <h3>General</h3>\n    <p>Simplyfy: Reduce the complexity by increasing the number of required neighbors<br/>\n    Link Length: Disable Link-Force and display links with the configured length<br/>\n    Hide Info Panel: Hide this panel<br/>\n    Search: Search for nodes and links with regular expressions<br/>\n    Filter: Filter nodes\n    Zoom To Fit: Fit graph to screen<br/>\n    Show Help: Show this help</p>\n    <h3>Advanced</h3>\n    <p>Orientation: Different layouts<br/>\n    Dimension: Switch from 3 to 2 dimension to change layout<br/>\n    Link Force: Enable Link-Force by respecting the number of neighbors of the attached nodes<br/>\n    Louvain-Communities: Communities detected with Louvain algorithm</p>',S=document.getElementById("info");S.innerHTML=y;const v=document.getElementById("graph");fetch("json/inside-corona.json").then((e=>e.json())).then((e=>{e.nodes.forEach((e=>{D.addNode(e.id)})),e.links.forEach((e=>{D.addUndirectedEdgeWithKey(e.id,e.source,e.target)})),console.log("Number of nodes",D.order),console.log("Number of edges",D.size),h().assign(D,{getEdgeWeight:null});let n=h().detailed(D);console.log(n),g().assign(D),m().assign(D);let i=D.mapNodes(((e,n)=>n.pagerank)),a=Math.min(...i),s=Math.max(...i);e.nodes.forEach((e=>{e.community=D.getNodeAttribute(e.id,"community");let n=D.getNodeAttribute(e.id,"pagerank");e.pagerank=n,e.value=Number($(n,a,s,1,20).toFixed(2))})),e.links.forEach((e=>{e.simmelianStrength=D.getEdgeAttribute(e.id,"simmelianStrength")})),e.links.forEach((n=>{const i=e.nodes[n.source],t=e.nodes[n.target];!i.neighbors&&(i.neighbors=[]),!t.neighbors&&(t.neighbors=[]),i.neighbors.push(t),t.neighbors.push(i),!i.links&&(i.links=[]),!t.links&&(t.links=[]),i.links.push(n),t.links.push(n)}));const d=[...Array(n.count).keys()],c=new Set,u=new Set;var f=null,F=[],E=[];const w=(0,t.Z)()(v).nodeThreeObject((e=>{const n=(new l.dpR).load(`${e.image}`),i=new l.xeV({map:n}),t=new l.jyi(i);let o=$(e.pagerank,a,s,10,50);return t.scale.set(o,o),t})).height(v.offsetHeight).showNavInfo(!1).graphData(e).dagMode(null).nodeLabel("title").linkLabel("title").linkWidth((e=>u.has(e)?5:1)).linkAutoColorBy((n=>e.nodes[n.source].community)).linkOpacity(.4).linkDirectionalParticles((e=>u.has(e)?2:0)).linkDirectionalParticleColor((()=>"red")).linkDirectionalParticleSpeed(.005).linkDirectionalParticleWidth(5).onBackgroundClick((e=>{c.clear(),u.clear(),R(),f=null})).onNodeClick(((n,i)=>{c.clear(),u.clear(),n&&n==f?(c.clear(),u.clear(),info.innerHTML="",R(),f=null):(i.ctrlKey||i.shiftKey||i.altKey)&&n!=f?(function(n,i){e.nodes;let t=e.links,o=(0,p.Ar)(D,n,i),l=(0,k.B)(D,o);t=t.filter((e=>l.includes(String(e.id)))),c.clear(),u.clear();let a="<h2>Shortest Path</h2><p>";o.forEach((n=>{let i=e.nodes[n];c.add(i),a=a.concat(i.title+" ("+i.group+")<br/>")})),a.concat("</p>"),S.innerHTML=a,t.forEach((e=>u.add(e))),R()}(f.id,n.id),f=n):n&&n!=f&&(c.add(n),n.neighbors.forEach((e=>c.add(e))),n.links.forEach((e=>u.add(e))),info.innerHTML="<h2>"+n.title+'</h2><img src="'+n.image+'" align="left"><p>Group: '+n.group+"<br/>Importance: "+n.value+"</p><p>"+n.notes+"</p>",f=n,R())})).onNodeRightClick((e=>{if("include"!=L.Filtermode||E.includes(e.title)){if("exclude"!=L.Filtermode||F.includes(e.title))return;F.push(e.title),console.log("Include-Filter"),console.log(E),console.log("Exclude-Filter"),console.log(F)}else E.push(e.title),console.log("Include-Filter"),console.log(E),console.log("Exclude-Filter"),console.log(F);let{nodes:n,links:i}=A();w.graphData({nodes:n,links:i}),w.numDimensions(L.Dimensions)})).onNodeDragEnd((e=>{e.fx=e.x,e.fy=e.y,e.fz=e.z})).onLinkClick((e=>{c.clear(),u.clear(),e&&(u.add(e),c.add(e.source),c.add(e.target)),R()}));r()().listenTo(v,(e=>w.width(e.offsetWidth)));const L={Orientation:null,"Link Length":80,Dimensions:3,Search:"",Simplify:1,"Link Force":!1,"Hide Info Panel":!1,Searchmode:"highlight",Filtermode:"include",Depth:1},C=new o.XS,x=C.addFolder("General");x.add(L,"Simplify",1,10,1).listen().onChange((function(){let{nodes:e,links:n}=A();w.graphData({nodes:e,links:n}),w.numDimensions(L.Dimensions)})),x.add(L,"Link Length",0,200).listen().onChange((function(){L["Link Force"]=!1,w.d3Force("link").distance(L["Link Length"]),w.numDimensions(L.Dimensions)})),x.add(L,"Hide Info Panel").listen().onChange((function(){L["Hide Info Panel"]?(S.style.display="none",v.style.height="100vh",w.height(v.offsetHeight)):(S.style.display="block",v.style.height="70vh",w.height(v.offsetHeight))})),x.open();const O=C.addFolder("Search / Filter");O.add(L,"Searchmode",["highlight","filter"]);const N=O.add(L,"Search").listen().onFinishChange((function(e){if("highlight"==L.Searchmode)!function(){let{nodes:e,links:n}=A();if(c.clear(),u.clear(),""!==N.object.Search){let i=N.object.Search.replace(/[.*+?{}()[\]\\]/g,"\\$&"),t=new RegExp(i,"gi");e=e.filter((e=>e.title.match(t))),n=n.filter((e=>e.title.match(t))),e.forEach((e=>{c.add(e),e.neighbors.forEach((e=>c.add(e))),e.links.forEach((e=>u.add(e)))})),n.forEach((e=>u.add(e)))}R()}();else{let{nodes:e,links:n}=A();w.graphData({nodes:e,links:n}),w.numDimensions(L.Dimensions)}}));O.add(L,"Filtermode",["include","exclude"]).listen(),O.add(L,"Depth",1,4,1).listen().onChange((function(){let{nodes:e,links:n}=A();w.graphData({nodes:e,links:n}),w.numDimensions(L.Dimensions)}));const j=C.addFolder("Groups");e.groups.forEach((e=>{L[e]=!0,j.add(L,e).listen().onChange((function(){let{nodes:e,links:n}=A();w.graphData({nodes:e,links:n}),w.numDimensions(L.Dimensions)}))}));const H=C.addFolder("Advanced");H.add(L,"Orientation",[null,"td","bu","lr","rl","zout","zin","radialout","radialin"]).onChange((e=>w&&w.dagMode(e)&&w.numDimensions(L.Dimensions))),H.add(L,"Dimensions",["2","3"]).onChange((e=>w&&w.dagMode(L.Orientation)&&w.numDimensions(e))),H.add(L,"Link Force").listen().onChange((function(){L["Link Force"]?(w.d3Force("link").distance((e=>1/(e.simmelianStrength+e.source.neighbors.length+e.target.neighbors.length)*1e3)),w.numDimensions(L.Dimensions)):(w.d3Force("link").distance(L["Link Length"]),w.numDimensions(L.Dimensions))}));const P=H.addFolder("Louvain-Communities");d.forEach((e=>{L[e]=!0,P.add(L,e).listen().onChange((function(){let{nodes:e,links:n}=A();w.graphData({nodes:e,links:n}),w.numDimensions(L.Dimensions)}))}));var M={add:function(){!function(){let{nodes:e,links:n}=w.graphData(),i=e.map((e=>e.id));e=e.filter((e=>i.some((n=>e.neighbors.map((e=>e.id)).includes(n))))),w.graphData({nodes:e,links:n}),w.numDimensions(L.Dimensions)}()}};C.add(M,"add").name("Filter Soley Nodes");var T={add:function(){w.zoomToFit(400)}};C.add(T,"add").name("Zoom To Fit");var _={add:function(){!function(){c.clear(),u.clear(),f=null,F.length=0,E.length=0;let{nodes:e,links:n}=A();w.graphData({nodes:e,links:n}),w.numDimensions(L.Dimensions)}()}};C.add(_,"add").name("Reset Filter");var I={add:function(){S.innerHTML=y}};function A(){let n=e.nodes,i=e.links;if(L.Simplify>1){n=n.filter((e=>e.neighbors.length>=L.Simplify));let e=n.map((e=>e.id));i=i.filter((n=>e.includes(n.source.id)&&e.includes(n.target.id)))}let t=[];e.groups.forEach((n=>{if(L[n]){let i=e.nodes.filter((e=>e.group==n)).map((e=>e.id));t=t.concat(i)}})),t=[...new Set(t)],n=n.filter((e=>t.includes(e.id))),i=i.filter((e=>t.includes(e.source.id)&&t.includes(e.target.id)));let o=[];if(d.forEach((n=>{if(L[n]){let i=e.nodes.filter((e=>e.community==n)).map((e=>e.id));o=o.concat(i)}})),o=[...new Set(o)],n=n.filter((e=>o.includes(e.id))),i=i.filter((e=>o.includes(e.source.id)&&o.includes(e.target.id))),""!==N.object.Search&&"filter"==L.Searchmode){let e=N.object.Search.replace(/[.*+?{}()[\]\\]/g,"\\$&"),t=new RegExp(e,"gi"),o=n.filter((e=>e.title.match(t))),l=i.filter((e=>e.title.match(t))),a=o.map((e=>e.id)),r=o.map((e=>e.neighbors.map((e=>e.id)))).flat();a=a.concat(r);let s=l.map((e=>e.source.id)),d=l.map((e=>e.target.id));a=a.concat(s).concat(d),a=[...new Set(a)],n=n.filter((e=>a.includes(e.id))),i=i.filter((e=>a.includes(e.source.id)&&a.includes(e.target.id)))}if(E.length>0){let e=("^"+E.join("$|^")+"$").replace(/[.*+?{}()[\]\\]/g,"\\$&"),t=new RegExp(e,"gi"),o=n.filter((e=>e.title.match(t))).map((e=>e.id)),l=[];o.forEach((e=>{(0,b.a)(D,e,(function(e,n,i){i<=L.Depth&&l.push(Number(e))}))})),o=o.concat(l),o=[...new Set(o)],n=n.filter((e=>o.includes(e.id))),i=i.filter((e=>o.includes(e.source.id)&&o.includes(e.target.id)))}if(F.length>0){let e=("^"+F.join("$|^")+"$").replace(/[.*+?{}()[\]\\]/g,"\\$&"),t=new RegExp(e,"gi"),o=n.filter((e=>e.title.match(t))).map((e=>e.id));if(L.Depth>1){let e=[];o.forEach((n=>{(0,b.a)(D,n,(function(n,i,t){t<=L.Depth-1&&e.push(Number(n))}))})),o=o.concat(e)}o=[...new Set(o)],n=n.filter((e=>!o.includes(e.id))),i=i.filter((e=>!o.includes(e.source.id)&&!o.includes(e.target.id)))}return{nodes:n,links:i}}function R(){w.linkWidth(w.linkWidth()).linkDirectionalParticles(w.linkDirectionalParticles())}function $(e,n,i,t,o){return(e-n)*(o-t)/(i-n)+t}C.add(I,"add").name("Show Help")}))}},i={};function t(e){var o=i[e];if(void 0!==o)return o.exports;var l=i[e]={exports:{}};return n[e].call(l.exports,l,l.exports,t),l.exports}t.m=n,e=[],t.O=(n,i,o,l)=>{if(!i){var a=1/0;for(c=0;c<e.length;c++){for(var[i,o,l]=e[c],r=!0,s=0;s<i.length;s++)(!1&l||a>=l)&&Object.keys(t.O).every((e=>t.O[e](i[s])))?i.splice(s--,1):(r=!1,l<a&&(a=l));if(r){e.splice(c--,1);var d=o();void 0!==d&&(n=d)}}return n}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[i,o,l]},t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={179:0};t.O.j=n=>0===e[n];var n=(n,i)=>{var o,l,[a,r,s]=i,d=0;if(a.some((n=>0!==e[n]))){for(o in r)t.o(r,o)&&(t.m[o]=r[o]);if(s)var c=s(t)}for(n&&n(i);d<a.length;d++)l=a[d],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(c)},i=self.webpackChunkinside_corona_angst_frei_ch=self.webpackChunkinside_corona_angst_frei_ch||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))})();var o=t.O(void 0,[715],(()=>t(8138)));o=t.O(o)})();