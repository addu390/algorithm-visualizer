var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},r=t.parcelRequire40b1;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in n){var r=n[t];delete n[t];var a={id:t,exports:{}};return e[t]=a,r.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(t,e){n[t]=e},t.parcelRequire40b1=r);var a=r("EQ8Ao");const c=Math.min(window.innerWidth,750),o=a.range(300*c/600).map((function(){return[Math.random()*c,300*Math.random()]})),i=a.select("body").append("svg").attr("width",c).attr("height",300).on("click",(function(t){const[e,n]=a.pointer(t,a.selectAll("svg").node());u.attr("cx",e).attr("cy",n),x()})),l=c/2,d=i.selectAll(".node").data([{x1:0,x2:l,y1:0,y2:150},{x1:l,x2:c,y1:0,y2:150},{x1:0,x2:l,y1:150,y2:300},{x1:l,x2:c,y1:150,y2:300}]).enter().append("rect").attr("class","node").attr("x",(function(t){return t.x1})).attr("y",(function(t){return t.y1})).attr("width",(function(t){return t.x2-t.x1})).attr("height",(function(t){return t.y2-t.y1}));let s=i.selectAll(".rect").data([{}]).enter().append("rect").attr("class","rect").attr("width",100).attr("height",100);const y=i.selectAll(".point").data(o).enter().append("circle").attr("class","point").attr("cx",(function(t){return t[0]})).attr("cy",(function(t){return t[1]})).attr("r",3);let u=i.append("circle").attr("id","pt").attr("r",3).attr("cx",c/2).attr("cy",150).style("fill","yellow");function x(){const t=+u.attr("cx"),e=+u.attr("cy");s.attr("x",t-50).attr("y",e-50);const n=+s.attr("x"),r=+s.attr("y"),a=+s.attr("width"),c=+s.attr("height");y.each((t=>{const[e,o]=t;t.selected=e>=n&&e<=n+a&&o>=r&&o<=r+c})),y.classed("selected",(t=>t.selected));const o=[];d.each((t=>{var e,a;a={x1:n,x2:n+100,y1:r,y2:r+100},(e=t).x1<=a.x2&&e.x2>=a.x1&&e.y1<=a.y2&&e.y2>=a.y1&&o.push(t)})),y.each((t=>{t.scanned=!1,o.forEach((e=>{(function(t,e){const[n,r]=t,{x1:a,x2:c,y1:o,y2:i}=e;return n>=a&&n<=c&&r>=o&&r<=i})(t,e)&&(t.scanned=!0)}))})),y.classed("scanned",(t=>t.scanned))}x();
//# sourceMappingURL=2.bd68c7dc.js.map
