!function(){"use strict";!function(){var t=class{constructor(t){this.gridContainer=t,this.createGrid(),this.initializeStartAndEnd()}createGrid(){let t=document.createElement("table");t.classList.add("table");for(let s=0;s<23;s++){let e=document.createElement("tr");e.classList.add(`row-${s}`);for(let t=0;t<46;t++){let a=document.createElement("td");a.classList.add(`n-${s}-${t}`),a.classList.add("node"),a.dataset.status="unvisited",a.draggable=!1,a.addEventListener("click",(()=>{"wall"===a.dataset.status?(a.dataset.status="unvisited",a.style.removeProperty("background-color")):"unvisited"===a.dataset.status&&(a.dataset.status="wall",a.style.backgroundColor="black")})),e.appendChild(a)}t.appendChild(e)}this.gridContainer.appendChild(t)}initializeStartAndEnd(){let t=document.querySelector(".n-11-11"),s=document.querySelector(".n-11-33");t.classList.add("start"),s.classList.add("end"),t.dataset.status="start",s.dataset.status="end",t.draggable=!0,s.draggable=!0,t.innerHTML='<i class="fas fa-location-arrow"></i>',s.innerHTML='<i class="far fa-times-circle"></i>',this.gridContainer.addEventListener("dragstart",(e=>{const a=e.target;a===t?e.dataTransfer.setData("text","start"):a===s&&e.dataTransfer.setData("text","end")})),this.gridContainer.addEventListener("dragover",(t=>{t.preventDefault()})),this.gridContainer.addEventListener("drop",(e=>{e.preventDefault();const a=e.dataTransfer.getData("text");if("start"===a){const s=e.target;if(!s.classList.contains("node")||"wall"===s.dataset.status)return;s.innerHTML=t.innerHTML,s.classList.add("start"),s.dataset.status="start",s.draggable=!0,t.innerHTML="",t.classList.remove("start"),t.dataset.status="unvisited",t.draggable=!1,t=document.querySelector(".start")}else if("end"===a){const t=e.target;if(!t.classList.contains("node")||"wall"===t.dataset.status)return;t.innerHTML=s.innerHTML,t.classList.add("end"),t.dataset.status="end",t.draggable=!0,s.classList.remove("end"),s.innerHTML="",s.dataset.status="unvisited",s.draggable=!1,s=document.querySelector(".end")}}))}resetBoard(){this.gridContainer.innerHTML="",this.createGrid(),this.initializeStartAndEnd()}},s=class{constructor(t,s,e){this.grid=t,this.start=s,this.end=e,this.visitedInOrder=[],this.routeFromStartToEnd=[]}runBFS(){let t=[],s=new Set;for(t.push(this.start),this.visitedInOrder=[];0!==t.length;){let e=t.shift(),a=this.getPos(e),i=document.querySelector(`.n-${a[0]}-${parseInt(a[1])+1}`);if(i&&!s.has(this.getPos(i).join("-"))&&"wall"!==i.dataset.status&&(i.classList.add("cookie-west"),this.visitedInOrder.push(i),t.push(i),s.add(this.getPos(i).join("-")),"end"===i.dataset.status&&"start"===i.dataset.status||(i.dataset.status="visited"),this.getPos(i).join("-")===this.getPos(this.end).join("-")))return this.animateVisited(),!0;let n=document.querySelector(`.n-${parseInt(a[0])+1}-${a[1]}`);if(n&&!s.has(this.getPos(n).join("-"))&&"wall"!==n.dataset.status&&(n.classList.add("cookie-north"),this.visitedInOrder.push(n),t.push(n),s.add(this.getPos(n).join("-")),"end"===n.dataset.status&&"start"===n.dataset.status||(n.dataset.status="visited"),this.getPos(n).join("-")===this.getPos(this.end).join("-")))return this.animateVisited(),!0;let r=document.querySelector(`.n-${a[0]}-${parseInt(a[1])-1}`);if(r&&!s.has(this.getPos(r).join("-"))&&"wall"!==r.dataset.status&&(r.classList.add("cookie-east"),this.visitedInOrder.push(r),t.push(r),s.add(this.getPos(r).join("-")),"end"===r.dataset.status&&"start"===r.dataset.status||(r.dataset.status="visited"),this.getPos(r).join("-")===this.getPos(this.end).join("-")))return this.animateVisited(),!0;let d=document.querySelector(`.n-${parseInt(a[0])-1}-${a[1]}`);if(d&&!s.has(this.getPos(d).join("-"))&&"wall"!==d.dataset.status&&(d.classList.add("cookie-south"),this.visitedInOrder.push(d),t.push(d),s.add(this.getPos(d).join("-")),"end"===d.dataset.status&&"start"===d.dataset.status||(d.dataset.status="visited"),this.getPos(d).join("-")===this.getPos(this.end).join("-")))return this.animateVisited(),!0}return this.animateVisited(),!1}runDFS(){let t=[],s=new Set;for(t.push(this.start),this.visitedInOrder=[];0!==t.length;){let e=t.pop(),a=this.getPos(e),i=document.querySelector(`.n-${a[0]}-${parseInt(a[1])+1}`);if(i&&!s.has(this.getPos(i).join("-"))&&"wall"!==i.dataset.status&&(i.classList.add("cookie-west"),this.visitedInOrder.push(i),t.push(i),s.add(this.getPos(i).join("-")),"end"===i.dataset.status&&"start"===i.dataset.status||(i.dataset.status="visited"),this.getPos(i).join("-")===this.getPos(this.end).join("-")))return this.animateVisited(),!0;let n=document.querySelector(`.n-${parseInt(a[0])+1}-${a[1]}`);if(n&&!s.has(this.getPos(n).join("-"))&&"wall"!==n.dataset.status&&(n.classList.add("cookie-north"),this.visitedInOrder.push(n),t.push(n),s.add(this.getPos(n).join("-")),"end"===n.dataset.status&&"start"===n.dataset.status||(n.dataset.status="visited"),this.getPos(n).join("-")===this.getPos(this.end).join("-")))return this.animateVisited(),!0;let r=document.querySelector(`.n-${a[0]}-${parseInt(a[1])-1}`);if(r&&!s.has(this.getPos(r).join("-"))&&"wall"!==r.dataset.status&&(r.classList.add("cookie-east"),this.visitedInOrder.push(r),t.push(r),s.add(this.getPos(r).join("-")),"end"===r.dataset.status&&"start"===r.dataset.status||(r.dataset.status="visited"),this.getPos(r).join("-")===this.getPos(this.end).join("-")))return this.animateVisited(),!0;let d=document.querySelector(`.n-${parseInt(a[0])-1}-${a[1]}`);if(d&&!s.has(this.getPos(d).join("-"))&&"wall"!==d.dataset.status&&(d.classList.add("cookie-south"),this.visitedInOrder.push(d),t.push(d),s.add(this.getPos(d).join("-")),"end"===d.dataset.status&&"start"===d.dataset.status||(d.dataset.status="visited"),this.getPos(d).join("-")===this.getPos(this.end).join("-")))return this.animateVisited(),!0}return this.animateVisited(),!1}getPos(t){let s=t.className.split(" ")[0].split("-");return[s[1],s[2]]}animateVisited(){for(let t=0;t<this.visitedInOrder.length;t++)setTimeout((()=>{this.visitedInOrder[t].classList.add("visited-anim")}),25*t),t===this.visitedInOrder.length-1&&setTimeout((()=>{this.animateBackTrack()}),25*t)}backTrack(){let t=this.end;for(this.routeFromStartToEnd=[];this.getPos(t).join("-")!==this.getPos(this.start).join("-");){this.routeFromStartToEnd.push(t);let s=this.getPos(t);t.classList.contains("cookie-south")?t=document.querySelector(`.n-${parseInt(s[0])+1}-${s[1]}`):t.classList.contains("cookie-north")?t=document.querySelector(`.n-${parseInt(s[0])-1}-${s[1]}`):t.classList.contains("cookie-east")?t=document.querySelector(`.n-${s[0]}-${parseInt(s[1])+1}`):t.classList.contains("cookie-west")&&(t=document.querySelector(`.n-${s[0]}-${parseInt(s[1])-1}`))}this.routeFromStartToEnd.push(t),this.routeFromStartToEnd.reverse()}animateBackTrack(){for(let t=0;t<this.routeFromStartToEnd.length;t++)setTimeout((()=>{this.routeFromStartToEnd[t].style.backgroundColor="yellow"}),25*t);document.querySelector("#stats-p").innerHTML=`Length of path is ${this.routeFromStartToEnd.length}. Total number of visited nodes is ${this.visitedInOrder.length}.`}};let e=null;document.addEventListener("DOMContentLoaded",(()=>{const a=document.querySelector(".grid-container");e=new t(a);let i=document.querySelector(".visualizeBFS"),n=document.querySelector(".visualizeDFS");i.addEventListener("click",(()=>{let t=document.querySelector(".start"),a=document.querySelector(".end"),i=new s(e,t,a);i.runBFS()&&i.backTrack()})),n.addEventListener("click",(()=>{let t=document.querySelector(".start"),a=document.querySelector(".end"),i=new s(e,t,a);i.runDFS()&&i.backTrack()})),document.querySelector(".resetBoard").addEventListener("click",(()=>{e.resetBoard()}))}))}()}();
//# sourceMappingURL=main.js.map