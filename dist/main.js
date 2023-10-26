!function(){"use strict";!function(){var t=class{constructor(t){this.gridContainer=t,this.numRows=23,this.numCols=46,this.createGrid(),this.initializeStartAndEnd(".n-11-11",".n-11-33")}createGrid(){let t=document.createElement("table");t.classList.add("table");for(let e=0;e<this.numRows;e++){let s=document.createElement("tr");s.classList.add(`row-${e}`);for(let t=0;t<this.numCols;t++){let a=document.createElement("td");a.classList.add(`n-${e}-${t}`),a.classList.add("node"),a.dataset.status="unvisited",a.dataset.portal="none",a.dataset.cookie="none",a.draggable=!1,a.addEventListener("click",(()=>{"wall"===a.dataset.status?(a.dataset.status="unvisited",a.style.removeProperty("background-color")):"unvisited"===a.dataset.status&&"none"===a.dataset.portal&&(a.dataset.status="wall",a.style.backgroundColor="black")})),s.appendChild(a)}t.appendChild(s)}this.gridContainer.appendChild(t)}initializeStartAndEnd(t,e){let s=document.querySelector(t),a=document.querySelector(e);s.classList.add("start"),a.classList.add("end"),s.dataset.status="start",a.dataset.status="end",s.draggable=!0,a.draggable=!0,s.innerHTML='<i class="fas fa-location-arrow"></i>',a.innerHTML='<i class="fa-solid fa-flag-checkered"></i>',this.gridContainer.addEventListener("dragstart",(t=>{const e=t.target;e===s?t.dataTransfer.setData("text","start"):e===a&&t.dataTransfer.setData("text","end")})),this.gridContainer.addEventListener("dragover",(t=>{t.preventDefault()})),this.gridContainer.addEventListener("drop",(t=>{t.preventDefault();const e=t.dataTransfer.getData("text");if("start"===e){const e=t.target;if(!e.classList.contains("node")||"unvisited"!==e.dataset.status)return;e.innerHTML=s.innerHTML,e.classList.add("start"),e.dataset.status="start",e.draggable=!0,s.innerHTML="",s.classList.remove("start"),s.dataset.status="unvisited",s.draggable=!1,s=document.querySelector(".start")}else if("end"===e){const e=t.target;if(!e.classList.contains("node")||"unvisited"!==e.dataset.status)return;e.innerHTML=a.innerHTML,e.classList.add("end"),e.dataset.status="end",e.draggable=!0,a.innerHTML="",a.classList.remove("end"),a.dataset.status="unvisited",a.draggable=!1,a=document.querySelector(".end")}}))}resetBoard(){this.gridContainer.remove();let t=document.querySelector(".grid-container"),e=document.createElement("div");e.classList.add("grid"),t.appendChild(e),e=document.querySelector(".grid"),this.gridContainer=e,this.createGrid(),this.initializeStartAndEnd(".n-11-11",".n-11-33")}clearBoard(){for(let t=0;t<this.numRows;t++)for(let e=0;e<this.numCols;e++){let s=document.querySelector(`.n-${t}-${e}`);s.dataset.cookies="none","visited"===s.dataset.status&&(s.dataset.status="unvisited"),s.classList.contains("visited-anim")&&s.classList.remove("visited-anim"),s.classList.contains("shortest-path")&&s.classList.remove("shortest-path")}}getPosSelector(t){return t.className.split(" ")[0]}placePortals(t,e){let s=document.querySelector(t),a=document.querySelector(e);s.classList.add("portal-start"),a.classList.add("portal-end"),s.dataset.portal="portal-start",a.dataset.portal="portal-end",s.draggable=!0,a.draggable=!0,s.innerHTML='<i class="fa-solid fa-door-open"></i>',a.innerHTML='<i class="fa-solid fa-door-closed"></i>',this.gridContainer.addEventListener("dragstart",(t=>{const e=t.target;e===s?t.dataTransfer.setData("text","portal-start"):e===a&&t.dataTransfer.setData("text","portal-end")})),this.gridContainer.addEventListener("dragover",(t=>{t.preventDefault()})),this.gridContainer.addEventListener("drop",(t=>{t.preventDefault();const e=t.dataTransfer.getData("text");if("portal-start"===e){const e=t.target;if(!e.classList.contains("node")||"unvisited"!==e.dataset.status)return;e.innerHTML=s.innerHTML,e.classList.add("portal-start"),e.dataset.portal="portal-start",e.draggable=!0,s.innerHTML="",s.classList.remove("portal-start"),s.dataset.portal="none",s.draggable=!1,s=document.querySelector(".portal-start")}else if("portal-end"===e){const e=t.target;if(!e.classList.contains("node")||"unvisited"!==e.dataset.status)return;e.innerHTML=a.innerHTML,e.classList.add("portal-end"),e.dataset.portal="portal-end",e.draggable=!0,a.innerHTML="",a.classList.remove("portal-end"),a.dataset.portal="none",a.draggable=!1,a=document.querySelector(".portal-end")}}))}removePortals(){let t=document.querySelector(".portal-start"),e=document.querySelector(".portal-end");t.classList.remove("portal-start"),e.classList.remove("portal-end"),t.dataset.portal="none",e.dataset.portal="none",t.draggable=!1,e.draggable=!1,t.innerHTML="",e.innerHTML=""}randomWalls(){}mazeConfigOne(){}},e=class{constructor(t,e,s){this.grid=t,this.start=e,this.end=s,this.visitedInOrder=[],this.routeFromStartToEnd=[]}getPos(t){let e=t.className.split(" ")[0].split("-");return[e[1],e[2]]}runBFS(){let t=[],e=new Set;for(t.push(this.start),this.visitedInOrder=[];0!==t.length;){let s=t.shift(),a=this.getPos(s);if(this.visitedInOrder.push(s),"end"===s.dataset.status&&"start"===s.dataset.status||(s.dataset.status="visited"),this.getPos(s).join("-")===this.getPos(this.end).join("-"))return this.animateVisited(),!0;if("portal-start"===s.dataset.portal){let s=document.querySelector(".portal-end");s&&!e.has(this.getPos(s).join("-"))&&(s.dataset.cookie="cookie-portal-start",t.push(s),e.add(this.getPos(s).join("-")))}else{let s=document.querySelector(`.n-${a[0]}-${parseInt(a[1])+1}`);s&&!e.has(this.getPos(s).join("-"))&&"wall"!==s.dataset.status&&(s.dataset.cookie="cookie-west",t.push(s),e.add(this.getPos(s).join("-")));let r=document.querySelector(`.n-${parseInt(a[0])+1}-${a[1]}`);r&&!e.has(this.getPos(r).join("-"))&&"wall"!==r.dataset.status&&(r.dataset.cookie="cookie-north",t.push(r),e.add(this.getPos(r).join("-")));let n=document.querySelector(`.n-${a[0]}-${parseInt(a[1])-1}`);n&&!e.has(this.getPos(n).join("-"))&&"wall"!==n.dataset.status&&(n.dataset.cookie="cookie-east",t.push(n),e.add(this.getPos(n).join("-")));let o=document.querySelector(`.n-${parseInt(a[0])-1}-${a[1]}`);o&&!e.has(this.getPos(o).join("-"))&&"wall"!==o.dataset.status&&(o.dataset.cookie="cookie-south",t.push(o),e.add(this.getPos(o).join("-")))}}return this.animateVisited(),!1}runDFS(){let t=[],e=new Set;for(this.visitedInOrder=[],t.push(this.start);0!==t.length;){let s=t.pop(),a=this.getPos(s);if(this.visitedInOrder.push(s),e.add(this.getPos(s).join("-")),"end"===s.dataset.status&&"start"===s.dataset.status||(s.dataset.status="visited"),this.getPos(s).join("-")===this.getPos(this.end).join("-"))return this.animateVisited(),!0;if("portal-start"===s.dataset.portal){let s=document.querySelector(".portal-end");s&&!e.has(this.getPos(s).join("-"))&&(s.dataset.cookie="cookie-portal-start",t.push(s))}else{let s=document.querySelector(`.n-${a[0]}-${parseInt(a[1])-1}`);s&&!e.has(this.getPos(s).join("-"))&&"wall"!==s.dataset.status&&(s.dataset.cookie="cookie-east",t.push(s));let r=document.querySelector(`.n-${parseInt(a[0])-1}-${a[1]}`);r&&!e.has(this.getPos(r).join("-"))&&"wall"!==r.dataset.status&&(r.dataset.cookie="cookie-south",t.push(r));let n=document.querySelector(`.n-${a[0]}-${parseInt(a[1])+1}`);n&&!e.has(this.getPos(n).join("-"))&&"wall"!==n.dataset.status&&(n.dataset.cookie="cookie-west",t.push(n));let o=document.querySelector(`.n-${parseInt(a[0])+1}-${a[1]}`);o&&!e.has(this.getPos(o).join("-"))&&"wall"!==o.dataset.status&&(o.dataset.cookie="cookie-north",t.push(o))}}return this.animateVisited(),!1}backTrack(){let t=this.end;for(this.routeFromStartToEnd=[];this.getPos(t).join("-")!==this.getPos(this.start).join("-");){this.routeFromStartToEnd.push(t);let e=this.getPos(t);"cookie-south"===t.dataset.cookie?t=document.querySelector(`.n-${parseInt(e[0])+1}-${e[1]}`):"cookie-north"===t.dataset.cookie?t=document.querySelector(`.n-${parseInt(e[0])-1}-${e[1]}`):"cookie-east"===t.dataset.cookie?t=document.querySelector(`.n-${e[0]}-${parseInt(e[1])+1}`):"cookie-west"===t.dataset.cookie?t=document.querySelector(`.n-${e[0]}-${parseInt(e[1])-1}`):"cookie-portal-start"===t.dataset.cookie&&(t=document.querySelector(".portal-start"))}this.routeFromStartToEnd.push(t),this.routeFromStartToEnd.reverse()}animateVisited(){for(let t=0;t<this.visitedInOrder.length;t++)setTimeout((()=>{this.visitedInOrder[t].classList.add("visited-anim")}),15*t),t===this.visitedInOrder.length-1&&setTimeout((()=>{this.animateBackTrack()}),15*t)}animateBackTrack(){for(let t=0;t<this.routeFromStartToEnd.length;t++)setTimeout((()=>{this.routeFromStartToEnd[t].classList.add("shortest-path")}),25*t)}};let s=null;document.addEventListener("DOMContentLoaded",(()=>{const a=document.querySelector(".grid");s=new t(a);let r=document.querySelector(".placePortals"),n=!1;r.addEventListener("click",(()=>{n?n&&(n=!1,s.removePortals(),r.innerText="Place Portals"):(n=!0,s.placePortals(".n-11-13",".n-11-31"),r.innerText="Remove Portals")})),document.querySelector(".resetBoard").addEventListener("click",(()=>{n&&(n=!1,s.removePortals()),s.resetBoard(),r.innerText="Place Portals"})),document.querySelector(".clearBoard").addEventListener("click",(()=>{s.clearBoard()}));let o=document.querySelector(".dropbtn"),i=document.getElementById("myDropdown");o.addEventListener("click",(function(){"block"===i.style.display?i.style.display="none":i.style.display="block"}));let d=null,l=document.querySelector(".visualize");l.addEventListener("click",(()=>{if(null===d)l.innerText="Select an algorithm!";else if("bfs"===d){let t=document.querySelector(".start"),a=document.querySelector(".end"),r=new e(s,t,a);s.clearBoard(),r.runBFS()&&r.backTrack()}else if("dfs"===d){let t=document.querySelector(".start"),a=document.querySelector(".end"),r=new e(s,t,a);s.clearBoard(),r.runDFS()&&r.backTrack()}}));let c=document.querySelector(".selectedBFS"),u=document.querySelector(".selectedDFS");c.addEventListener("click",(()=>{d="bfs",l.innerText="Visualize",i.style.display="none"})),u.addEventListener("click",(()=>{d="dfs",l.innerText="Visualize",i.style.display="none"}));let h=document.getElementById("myModal"),m=document.getElementById("myBtn"),p=document.getElementsByClassName("close")[0];m.addEventListener("click",(()=>{h.style.display="block"})),p.addEventListener("click",(()=>{h.style.display="none"})),window.addEventListener("click",(t=>{t.target==h&&(h.style.display="none")}))}))}()}();
//# sourceMappingURL=main.js.map