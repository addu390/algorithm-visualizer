var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},r={},n=t.parcelRequirefde0;null==n&&((n=function(t){if(t in e)return e[t].exports;if(t in r){var n=r[t];delete r[t];var a={id:t,exports:{}};return e[t]=a,n.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(t,e){r[t]=e},t.parcelRequirefde0=n);var a=n("h36xl");const c=Math.min(window.innerWidth,750),l=a.range(300*c/600).map((function(){return[Math.random()*c,300*Math.random()]}));let o;const i=a.select("body").append("svg").attr("width",c).attr("height",300).on("click",(function(t){const[e,r]=a.pointer(t,a.selectAll("svg").node());o.attr("cx",e).attr("cy",r),p()}));let d=i.selectAll(".rect").data([{}]).enter().append("rect").attr("class","rect").attr("width",100).attr("height",100);const s=i.selectAll(".point").data(l).enter().append("circle").attr("class","point").attr("cx",(function(t){return t[0]})).attr("cy",(function(t){return t[1]})).attr("r",3);function p(){const t=+o.attr("cx"),e=+o.attr("cy");d.attr("x",t-50).attr("y",e-50);const r=+d.attr("x"),n=+d.attr("y"),a=+d.attr("width"),c=+d.attr("height");s.each((t=>{const[e,l]=t;t.selected=e>=r&&e<=r+a&&l>=n&&l<=n+c})),s.classed("selected",(t=>t.selected))}o=i.append("circle").attr("id","pt").attr("r",3).attr("cx",c/2).attr("cy",150).style("fill","yellow"),p();
//# sourceMappingURL=1.6b2ee3b8.js.map
