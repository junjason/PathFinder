class Grid {
    constructor(gridContainer) {
        this.gridContainer = gridContainer;
        this.numRows = 23;
        this.numCols = 46;
        this.createGrid();
        this.initializeStartAndEnd(".n-11-11", ".n-11-33");
    }

    createGrid() {
        let floor = document.createElement("table");      // for each floor, create a table
        floor.classList.add(`table`);
        for(let j = 0; j < this.numRows; j++) {
            let row = document.createElement("tr");       // for each row, create row and add into table
            row.classList.add(`row-${j}`);                            // add a class of row {row#}
            for(let k = 0; k < this.numCols; k++) {
                let node = document.createElement("td");
                node.classList.add(`n-${j}-${k}`);
                node.classList.add("node");
                node.dataset.status = "unvisited";
                node.dataset.portal = "none";
                node.dataset.cookie = "none";
                node.draggable = false;
                node.addEventListener("click", () => {
                    if (node.dataset.status === "wall") {
                        node.dataset.status = "unvisited";
                        node.style.removeProperty("background-color");
                    }
                    else if (node.dataset.status === "unvisited" && node.dataset.portal === "none") {
                        node.dataset.status = "wall";
                        node.style.backgroundColor = "black";
                    }
                });
                row.appendChild(node);
            }
            floor.appendChild(row);
        }
        this.gridContainer.appendChild(floor);
    }

    initializeStartAndEnd(startPos, endPos) {
        let start = document.querySelector(startPos);
        let end = document.querySelector(endPos);

        start.classList.add("start");
        end.classList.add("end");
        start.dataset.status = "start";
        end.dataset.status = "end";

        // Make the icons draggable
        start.draggable = true;
        end.draggable = true;

        start.innerHTML = "<i class=\"fas fa-location-arrow\"></i>";
        end.innerHTML = "<i class=\"far fa-times-circle\"></i>";

        // Add dragstart event listener for the icons
        this.gridContainer.addEventListener("dragstart", (event) => {
            const targetElement = event.target;
            if (targetElement === start) {
                event.dataTransfer.setData("text", "start");
            } else if (targetElement === end) {
                event.dataTransfer.setData("text", "end");
            }
        });

        // Add drop event listener for the grid cells
        this.gridContainer.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        this.gridContainer.addEventListener("drop", (event) => {
            event.preventDefault();
            const data = event.dataTransfer.getData("text");
            if (data === "start") {
                const targetNode = event.target;
                if (!targetNode.classList.contains("node") || targetNode.dataset.status !== "unvisited") return;
                targetNode.innerHTML = start.innerHTML; // Update the icon visually
                targetNode.classList.add("start");
                targetNode.dataset.status = "start";
                targetNode.draggable = true; // Set draggable to true again
                start.innerHTML = ""; // Clear the previous icon
                start.classList.remove("start");
                start.dataset.status = "unvisited";
                start.draggable = false;
                start = document.querySelector(".start"); // reset start variable so it can be drag and dropped again
            } else if (data === "end") {
                const targetNode = event.target;
                if (!targetNode.classList.contains("node") || targetNode.dataset.status !== "unvisited") return;
                targetNode.innerHTML = end.innerHTML; // Update the icon visually
                targetNode.classList.add("end");
                targetNode.dataset.status = "end";
                targetNode.draggable = true; // Set draggable to true again
                end.innerHTML = ""; // Clear the previous icon
                end.classList.remove("end");
                end.dataset.status = "unvisited";
                end.draggable = false;
                end = document.querySelector(".end");   // reset end variable so it can be drag and dropped again
            }
        });
    }

    resetBoard() {
        this.gridContainer.remove();
        let outerGridContainer = document.querySelector(".grid-container");
        let newGrid = document.createElement("div");
        newGrid.classList.add("grid");
        outerGridContainer.appendChild(newGrid);
        newGrid = document.querySelector(".grid");
        this.gridContainer = newGrid;
        this.createGrid();
        this.initializeStartAndEnd(".n-11-11", ".n-11-33");
    }

    clearBoard() {
        // iterate through entire grid
            // set dataset-cookies to none for all
            // set dataset-status to unvisited for all
            // remove visited-anim class if classList contains that
            // remove backgroundColor property if has background property
        for (let i = 0; i < this.numRows; i++) {
            for (let j = 0; j < this.numCols; j++) {
                let node = document.querySelector(`.n-${i}-${j}`);
                node.dataset.cookies = "none";
                if (node.dataset.status === "visited") node.dataset.status = "unvisited";
                if (node.classList.contains("visited-anim")) node.classList.remove("visited-anim");
                if (node.classList.contains("shortest-path")) node.classList.remove("shortest-path");
            }
        }
    }

    getPosSelector(node) {
        let classes = node.className;
        let classNames = classes.split(" ");
        let coordinates = classNames[0];
        return coordinates;
    }

    placePortals() {
        let startP = document.querySelector(".n-11-13");
        let endP = document.querySelector(".n-11-31");

        // Implement bfs to add startPortal and endPortal where walls don't exist
        // if (startP.dataset.status === "wall") {
        //     let queue = [];
        //     queue.push(startP);
        //     while (startP.dataset.status === "wall") {
        //         next = queue.shift();
        //         // visit all neighbors and add them to queue
        //         
        //         startP = next;
        //     }
        // }

        // if (endP.dataset.status === "wall") {
        //     while (endP.dataset.status === "wall") {
        //         next = 
        //     }
        // }

        startP.classList.add("portal-start");
        endP.classList.add("portal-end");
        startP.dataset.portal = "portal-start";
        endP.dataset.portal = "portal-end";

        // Make the icons draggable
        startP.draggable = true;
        endP.draggable = true;

        startP.innerHTML = "<i class=\"fa-solid fa-door-open\"></i>";
        endP.innerHTML = "<i class=\"fa-solid fa-door-closed\"></i>"

        // Add dragstart event listener for the icons
        this.gridContainer.addEventListener("dragstart", (event) => {
            const targetElement = event.target;
            if (targetElement === startP) {
                event.dataTransfer.setData("text", "portal-start");
            } else if (targetElement === endP) {
                event.dataTransfer.setData("text", "portal-end");
            }
        });

        // Add drop event listener for the grid cells
        this.gridContainer.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        this.gridContainer.addEventListener("drop", (event) => {
            event.preventDefault();
            const data = event.dataTransfer.getData("text");
            if (data === "portal-start") {
                const targetNode = event.target;
                if (!targetNode.classList.contains("node") || targetNode.dataset.status !== "unvisited") return;
                targetNode.innerHTML = startP.innerHTML; // Update the icon visually
                targetNode.classList.add("portal-start");
                targetNode.dataset.portal = "portal-start";
                targetNode.draggable = true; // Set draggable to true again
                startP.innerHTML = ""; // Clear the previous icon
                startP.classList.remove("portal-start");
                startP.dataset.portal = "none";
                startP.draggable = false;
                startP = document.querySelector(".portal-start"); // reset start variable so it can be drag and dropped again
            } else if (data === "portal-end") {
                const targetNode = event.target;
                if (!targetNode.classList.contains("node") || targetNode.dataset.status !== "unvisited") return;
                targetNode.innerHTML = endP.innerHTML; // Update the icon visually
                targetNode.classList.add("portal-end");
                targetNode.dataset.portal = "portal-end";
                targetNode.draggable = true; // Set draggable to true again
                endP.innerHTML = ""; // Clear the previous icon
                endP.classList.remove("portal-end");
                endP.dataset.portal = "none";
                endP.draggable = false;
                endP = document.querySelector(".portal-end");   // reset end variable so it can be drag and dropped again
            }
        });
    }

    removePortals() {
        let startP = document.querySelector(".portal-start");
        let endP = document.querySelector(".portal-end");

        startP.classList.remove("portal-start");
        endP.classList.remove("portal-end");
        startP.dataset.portal = "none";
        endP.dataset.portal = "none";

        startP.draggable = false;
        endP.draggable = false;

        startP.innerHTML = "";
        endP.innerHTML = "";
    }
    
}

export default Grid;