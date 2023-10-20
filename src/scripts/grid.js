class Grid {
    constructor(gridContainer) {
        this.gridContainer = gridContainer;
        this.createGrid();
    }

    createGrid() {
        // 3d version
        // const numFloors = 2;
        // const numRows = 23;
        // const numCols = 23;
        // for(let i = 0; i < numFloors; i++) {
        //     let floor = document.createElement("table");      // for each floor, create a table
        //     floor.classList.add(`floor-${i}`);
        //     for(let j = 0; j < numRows; j++) {
        //         let row = document.createElement("tr");       // for each row, create row and add into table
        //         row.classList.add(`row-${j}`);                            // add a class of row {row#}
        //         for(let k = 0; k < numCols; k++) {
        //             let sq = document.createElement("td");
        //             sq.classList.add(`${i}-${j}-${k}`);
        //             row.appendChild(sq);
        //         }
        //         floor.appendChild(row);
        //     }
        //     // debugger
        //     this.gridContainer.appendChild(floor);
        // }

        // 2d version
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
                row.appendChild(node);
            }
            floor.appendChild(row);
        }
        this.gridContainer.appendChild(floor);

        let start = document.querySelector(".n-11-11");
        let end = document.querySelector(".n-11-31");
        // debugger;
        start.classList.add("start");
        end.classList.add("end");

        start.setAttribute("draggable", "true");
        end.setAttribute("draggable", "true");

        start.innerHTML = "<i class=\"fas fa-location-arrow\"></i>";
        end.innerHTML = "<i class=\"far fa-times-circle\"></i>";
    }
}

export default Grid;