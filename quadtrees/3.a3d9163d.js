var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},e={},o=t.parcelRequire40b1;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in e){var o=e[t];delete e[t];var r={id:t,exports:{}};return n[t]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,n){e[t]=n},t.parcelRequire40b1=o);var r=o("EQ8Ao");function i(t,n,e=4){return!!d(t.boundary,n)&&(t.points.length<e&&!t.topLeftChild?(t.points.push(n),!0):(t.topLeftChild||function(t,n){const{x1:e,x2:o,y1:r,y2:d}=t.boundary,a=(e+o)/2,l=(r+d)/2;t.topLeftChild=u({x1:e,y1:r,x2:a,y2:l}),t.bottomLeftChild=u({x1:e,y1:l,x2:a,y2:d}),t.topRightChild=u({x1:a,y1:r,x2:o,y2:l}),t.bottomRightChild=u({x1:a,y1:l,x2:o,y2:d}),t.points.forEach((e=>{i(t.topLeftChild,e,n)||i(t.bottomLeftChild,e,n)||i(t.topRightChild,e,n)||i(t.bottomRightChild,e,n)})),t.points=[]}(t,e),!!i(t.topLeftChild,n,e)||(!!i(t.bottomLeftChild,n,e)||(!!i(t.topRightChild,n,e)||!!i(t.bottomRightChild,n,e)))))}function d(t,n){return n.x>=t.x1&&n.x<=t.x2&&n.y>=t.y1&&n.y<=t.y2}function a(t,n){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function u(t){return{boundary:t,points:[]}}var l={insert:i,search:function t(n,e){return o=n.boundary,r=e,o.x1<=r.x2&&o.x2>=r.x1&&o.y1<=r.y2&&o.y2>=r.y1?n.topLeftChild?t(n.topLeftChild,e).concat(t(n.bottomLeftChild,e)).concat(t(n.topRightChild,e)).concat(t(n.bottomRightChild,e)):n.points.filter((t=>d(e,t))):[];var o,r},nearest:function t(n,e,o={point:null,distance:Number.MAX_VALUE}){if(e.x<n.boundary.x1-o.distance||e.x>n.boundary.x2+o.distance||e.y<n.boundary.y1-o.distance||e.y>n.boundary.y2+o.distance)return o;if(!n.topLeftChild)return n.points.forEach((t=>{const n=a(t,e);n<o.distance&&(o.point=t,o.distance=n)})),o;const r=[n.topLeftChild,n.topRightChild,n.bottomLeftChild,n.bottomRightChild],i=e.y<(n.boundary.y1+n.boundary.y2)/2,d=e.x<(n.boundary.x1+n.boundary.x2)/2;return o=t(r[2*(1-i)+1*(1-d)],e,o),o=t(r[2*(1-i)+1*d],e,o),o=t(r[2*i+1*(1-d)],e,o),o=t(r[2*i+1*d],e,o)},contains:d,distance:a}.insert;const c=r.select("#target").append("svg").attr("width",750).attr("height",300);let h={boundary:{x1:0,y1:0,x2:750,y2:300},points:[],depth:1};const y=r.scaleLinear().domain([0,8]).range(["#efe","#060"]);function p(t){t.depth=0;const n=[];return s(t,(t=>{n.push(t)})),n}function f(t){return p(t).flatMap((t=>t.points))}function s(t,n){n(t),t.topLeftChild&&(t.topLeftChild.depth=t.depth+1,s(t.topLeftChild,n),t.topRightChild.depth=t.depth+1,s(t.topRightChild,n),t.bottomLeftChild.depth=t.depth+1,s(t.bottomLeftChild,n),t.bottomRightChild.depth=t.depth+1,s(t.bottomRightChild,n))}let x,b;function C(){b=c.selectAll(".node").data(p(h),(t=>t.boundary)),b.exit().remove(),b.enter().append("rect").attr("class","node").attr("x",(function(t){return t.boundary.x1})).attr("y",(function(t){return t.boundary.y1})).attr("width",(function(t){return t.boundary.x2-t.boundary.x1})).attr("height",(function(t){return t.boundary.y2-t.boundary.y1})),c.selectAll(".node").style("fill",(function(t){return y(t.depth)})),x=c.selectAll(".point").data(f(h),(t=>t.x)),x.exit().remove(),x.enter().append("circle").attr("class","point").attr("cx",(function(t){return t.x})).attr("cy",(function(t){return t.y})).attr("r",3).transition().duration(2e3).styleTween("fill",(function(){return r.interpolate("red","#999")})),c.selectAll(".point").raise()}b=c.selectAll(".node").data(p(h),(t=>t.boundary)).enter().append("rect").attr("class","node").attr("x",(function(t){return t.boundary.x1})).attr("y",(function(t){return t.boundary.y1})).attr("width",(function(t){return t.boundary.x2-t.boundary.x1})).attr("height",(function(t){return t.boundary.y2-t.boundary.y1})),x=c.selectAll(".point").data(f(h)).enter().append("circle").attr("class","point").attr("cx",(function(t){return t.x})).attr("cy",(function(t){return t.y})).attr("r",3),h={boundary:{x1:0,y1:0,x2:750,y2:300},points:[],depth:1},C();const g=document.querySelector("button#restart");document.querySelector("button#add").addEventListener("click",(()=>{l(h,{x:750*Math.random(),y:300*Math.random()}),C()})),g.addEventListener("click",(()=>{h={boundary:{x1:0,y1:0,x2:750,y2:300},points:[],depth:1},C()}));
//# sourceMappingURL=3.a3d9163d.js.map
