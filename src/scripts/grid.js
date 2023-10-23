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
                node.addEventListener("click", () => {
                    if (node.dataset.status === "wall") {
                        node.dataset.status = "unvisited"
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
        let end = document.querySelector(".n-11-31");

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
                if (!targetNode.classList.contains("node")) return;
                targetNode.innerHTML = start.innerHTML; // Update the icon visually
                start.innerHTML = ""; // Clear the previous icon
                targetNode.classList.add("start");
                start.classList.remove("start");
                targetNode.draggable = true; // Set draggable to true again
                start.draggable = false;
                start = document.querySelector(".start");
            } else if (data === "end") {
                const targetNode = event.target;
                if (!targetNode.classList.contains("node")) return;
                targetNode.innerHTML = end.innerHTML; // Update the icon visually
                end.innerHTML = ""; // Clear the previous icon
                targetNode.classList.add("end");
                end.classList.remove("end");
                targetNode.draggable = true; // Set draggable to true again
                end.draggable = false;
                end = document.querySelector(".end");
            }
        });

        
    }

    resetBoard() {
        this.gridContainer.innerHTML = "";
        this.createGrid();
        this.initializeStartAndEnd();
    }

    
}

export default Grid;