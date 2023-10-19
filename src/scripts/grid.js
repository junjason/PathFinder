class Grid {
    constructor(gridContainer) {
        this.gridContainer = gridContainer;
        this.createGrid();
    }

    createGrid() {
        const numFloors = 2;
        const numRows = 23;
        const numCols = 23;
        for(let i = 0; i < numFloors; i++) {
            let floor = document.createElement("table");      // for each floor, create a table
            floor.classList.add(`floor-${i}`)
            for(let j = 0; j < numRows; j++) {
                let row = document.createElement("tr");       // for each row, create row and add into table
                row.classList.add(`row-${j}`);                            // add a class of row {row#}
                for(let k = 0; k < numCols; k++) {
                    let sq = document.createElement("td");
                    sq.classList.add(`${i}-${j}-${k}`);
                    row.appendChild(sq);
                }
                floor.appendChild(row);
            }
            // debugger
            this.gridContainer.appendChild(floor);
        }
    }
}

export default Grid;