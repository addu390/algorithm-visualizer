var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},e={},o=t.parcelRequire40b1;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in e){var o=e[t];delete e[t];var i={id:t,exports:{}};return n[t]=i,o.call(i.exports,i,i.exports),i.exports}var d=new Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(t,n){e[t]=n},t.parcelRequire40b1=o);var i,d=o("EQ8Ao");function r(t,n,e=4){return!!a(t.boundary,n)&&(t.points.length<e&&!t.topLeftChild?(t.points.push(n),!0):(t.topLeftChild||function(t,n){const{x1:e,x2:o,y1:i,y2:d}=t.boundary,a=(e+o)/2,l=(i+d)/2;t.topLeftChild=c({x1:e,y1:i,x2:a,y2:l}),t.bottomLeftChild=c({x1:e,y1:l,x2:a,y2:d}),t.topRightChild=c({x1:a,y1:i,x2:o,y2:l}),t.bottomRightChild=c({x1:a,y1:l,x2:o,y2:d}),t.points.forEach((e=>{r(t.topLeftChild,e,n)||r(t.bottomLeftChild,e,n)||r(t.topRightChild,e,n)||r(t.bottomRightChild,e,n)})),t.points=[]}(t,e),!!r(t.topLeftChild,n,e)||(!!r(t.bottomLeftChild,n,e)||(!!r(t.topRightChild,n,e)||!!r(t.bottomRightChild,n,e)))))}function a(t,n){return n.x>=t.x1&&n.x<=t.x2&&n.y>=t.y1&&n.y<=t.y2}function l(t,n){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function c(t){return{boundary:t,points:[]}}var h=(i={insert:r,search:function t(n,e){return o=n.boundary,i=e,o.x1<=i.x2&&o.x2>=i.x1&&o.y1<=i.y2&&o.y2>=i.y1?n.topLeftChild?t(n.topLeftChild,e).concat(t(n.bottomLeftChild,e)).concat(t(n.topRightChild,e)).concat(t(n.bottomRightChild,e)):n.points.filter((t=>a(e,t))):[];var o,i},nearest:function t(n,e,o={point:null,distance:Number.MAX_VALUE}){if(e.x<n.boundary.x1-o.distance||e.x>n.boundary.x2+o.distance||e.y<n.boundary.y1-o.distance||e.y>n.boundary.y2+o.distance)return o;if(!n.topLeftChild)return n.points.forEach((t=>{const n=l(t,e);n<o.distance&&(o.point=t,o.distance=n)})),o;const i=[n.topLeftChild,n.topRightChild,n.bottomLeftChild,n.bottomRightChild],d=e.y<(n.boundary.y1+n.boundary.y2)/2,r=e.x<(n.boundary.x1+n.boundary.x2)/2;return o=t(i[2*(1-d)+1*(1-r)],e,o),o=t(i[2*(1-d)+1*r],e,o),o=t(i[2*d+1*(1-r)],e,o),o=t(i[2*d+1*r],e,o)},contains:a,distance:l}).insert,s=i.distance;const y=d.range(500).map((()=>[750*Math.random(),300*Math.random()])),u={boundary:{x1:0,y1:0,x2:750,y2:300},points:[],depth:1};y.forEach((([t,n])=>{h(u,{x:t,y:n})}));const p=d.select("body").append("svg").attr("width",750).attr("height",300).on("click",(function(t){const[n,e]=d.pointer(t,d.selectAll("svg").node());p.selectAll("#pt").attr("cx",n).attr("cy",e),R()}));let f=p.selectAll(".node").data(L(u)).enter().append("rect").attr("class","node").attr("x",(function(t){return t.boundary.x1})).attr("y",(function(t){return t.boundary.y1})).attr("width",(function(t){return t.boundary.x2-t.boundary.x1})).attr("height",(function(t){return t.boundary.y2-t.boundary.y1})),b=p.selectAll(".point").data((x=u,L(x).flatMap((t=>t.points)))).enter().append("circle").attr("class","point").attr("cx",(function(t){return t.x})).attr("cy",(function(t){return t.y})).attr("r",3);var x;let C=p.append("circle").attr("id","pt").attr("r",3).attr("cx",375).attr("cy",150).style("fill","yellow");const g=d.scaleLinear().domain([0,8]).range(["#efe","#060"]);function L(t){t.depth=0;const n=[];return m(t,(t=>{n.push(t)})),n}function m(t,n){n(t),t.topLeftChild&&(t.topLeftChild.depth=t.depth+1,m(t.topLeftChild,n),t.topRightChild.depth=t.depth+1,m(t.topRightChild,n),t.bottomLeftChild.depth=t.depth+1,m(t.bottomLeftChild,n),t.bottomRightChild.depth=t.depth+1,m(t.bottomRightChild,n))}function R(){C=d.selectAll("#pt");const t=+C.attr("cx"),n=+C.attr("cy");b.each((t=>{t.scanned=t.selected=!1})),f.each((t=>{t.visited=!1}));v(u,{x:t,y:n}).point.selected=!0,b.classed("scanned",(t=>t.scanned)),b.classed("selected",(t=>t.selected)),f.style("fill",(t=>t.visited?g(t.depth):"none"))}function v(t,n,e={point:null,distance:Number.MAX_VALUE}){if(t.visited=!0,n.x<t.boundary.x1-e.distance||n.x>t.boundary.x2+e.distance||n.y<t.boundary.y1-e.distance||n.y>t.boundary.y2+e.distance)return e;if(!t.topLeftChild)return t.points.forEach((t=>{t.scanned=!0;const o=s(t,n);o<e.distance&&(e.point=t,e.distance=o)})),e;const o=[t.topLeftChild,t.topRightChild,t.bottomLeftChild,t.bottomRightChild],i=n.y<(t.boundary.y1+t.boundary.y2)/2,d=n.x<(t.boundary.x1+t.boundary.x2)/2;return e=v(o[2*(1-i)+1*(1-d)],n,e),e=v(o[2*(1-i)+1*d],n,e),e=v(o[2*i+1*(1-d)],n,e),e=v(o[2*i+1*d],n,e)}R();
//# sourceMappingURL=4.9f03bd78.js.map
