import Grid from "./scripts/grid";
import Route from "./scripts/route";

let grid = null;

document.addEventListener("DOMContentLoaded", () => {
    const gridDiv = document.querySelector(".grid");
    grid = new Grid(gridDiv);

    // Place Portals
    let portalBtn = document.querySelector(".placePortals");
    let portalExists = false;
    portalBtn.addEventListener("click", () => {
        if (!portalExists) {
            portalExists = true;
            grid.placePortals(".n-11-13", ".n-11-31");
            portalBtn.innerText = "Remove Portals";
        }
        else if (portalExists){
            portalExists = false;
            grid.removePortals();
            portalBtn.innerText = "Place Portals";
        }
    });

    // Reset Board
    let resetBoard = document.querySelector(".resetBoard")
    resetBoard.addEventListener("click", () => {
        if (portalExists){
            portalExists = false;
            grid.removePortals();
        }
        grid.resetBoard();
        portalBtn.innerText = "Place Portals";
    })


    // Clear Board
    // let clearBoard = document.querySelector(".clearBoard")
    // clearBoard.addEventListener("click", () => {
    //     grid.clearBoard();
    // })

    let generateMaze = document.querySelector(".generateMaze")
    generateMaze.addEventListener("click", () => {
        grid.clearBoard();
        grid.generateRandomMaze();
    })

    // Drop down Menu
    let dropbtn = document.querySelector(".dropbtn");
    let dropdownContent = document.getElementById("myDropdown");

    dropbtn.addEventListener("click", function() {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });

    // Algo selection logic and UI
    let algo = null;
    let visualize = document.querySelector(".visualize");
    visualize.addEventListener("click", () => {
        if (algo === null) {
            visualize.innerText = "Select an algorithm!";
        }
        else if (algo === "bfs") {
            let start = document.querySelector(".start");
            let end = document.querySelector(".end");
            let route = new Route(grid, start, end);
            grid.clearBoard();
            let pathFound = route.runBFS();
            if (pathFound) route.backTrack();
        }
        else if (algo === "dfs") {
            let start = document.querySelector(".start");
            let end = document.querySelector(".end");
            let route = new Route(grid, start, end);
            grid.clearBoard();
            let pathFound = route.runDFS(); 
            if (pathFound) route.backTrack();
        }
    });

    let selectedBFS = document.querySelector(".selectedBFS");
    let selectedDFS = document.querySelector(".selectedDFS");
    selectedBFS.addEventListener("click", () => {
        algo = "bfs";
        visualize.innerText = "Visualize";
        dropdownContent.style.display = "none";
    });

    selectedDFS.addEventListener("click", () => {
        algo = "dfs";
        visualize.innerText = "Visualize";
        dropdownContent.style.display = "none";
    });


    // Drop down functionality for auto generate walls
    // let dropWallbtn = document.getElementById("wallDropBtn");
    // let wallDropDownContent = document.querySelector(".auto-wall-dropdown");
    // dropWallbtn.addEventListener("click", () => {
    //     if (wallDropDownContent.style.display === "block") {
    //         wallDropDownContent.style.display = "none";
    //     } else {
    //         wallDropDownContent.style.display = "block";
    //     }
    // });

    // Modal
    let modal = document.getElementById("myModal");
    let modalBtn = document.getElementById("myBtn");
    let span = document.getElementsByClassName("close")[0];

    modalBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    span.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});









