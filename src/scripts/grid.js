class Grid {
    constructor(gridContainer) {
        this.gridContainer = gridContainer;
        this.createGrid();
        this.initializeStartAndEnd();
    }

    createGrid() {
        const numRows = 23;
        const numCols = 46;
        let floor = document.createElement("table");      // for each floor, create a table
        floor.classList.add(`table`);
        for(let j = 0; j < numRows; j++) {
            let row = document.createElement("tr");       // for each row, create row and add into table
            row.classList.add(`row-${j}`);                            // add a class of row {row#}
            for(let k = 0; k < numCols; k++) {
                let node = document.createElement("td");
                node.classList.add(`n-${j}-${k}`);
                node.classList.add("node");
                node.dataset.status = "unvisited";
                node.dataset.portal = "none";
                node.draggable = false;
                node.addEventListener("click", () => {
                    if (node.dataset.status === "wall") {
                        node.dataset.status = "unvisited";
                        node.style.removeProperty("background-color");
                    }
                    else if (node.dataset.status === "unvisited") {
                        node.dataset.status = "wall"
                        node.style.backgroundColor = "black";
                    }
                });
                row.appendChild(node);
            }
            floor.appendChild(row);
        }
        this.gridContainer.appendChild(floor);
    }

    initializeStartAndEnd() {
        let start = document.querySelector(".n-11-11");
        let end = document.querySelector(".n-11-33");

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
        this.gridContainer.innerHTML = "";
        this.createGrid();
        this.initializeStartAndEnd();
    }


    placePortals() {
        let startP = document.querySelector(".n-11-14");
        let endP = document.querySelector(".n-11-30");

        startP.classList.add("portal-start");
        endP.classList.add("portal-end");
        startP.dataset.portal = "portal-start";
        endP.dataset.portal = "portal-end";

        // Make the icons draggable
        startP.draggable = true;
        endP.draggable = true;

        startP.innerHTML = "<i class=\"fa-solid fa-door-open\"></i>";
        endP.innerHTML = "<i class=\"fa-solid fa-door-open\"></i>";

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