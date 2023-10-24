import Grid from "./scripts/grid";
import Route from "./scripts/route";

let grid = null;

document.addEventListener("DOMContentLoaded", () => {
    // console.log("Hello from index.js");
    const gridContainer = document.querySelector(".grid-container");
    grid = new Grid(gridContainer);

    // place portals event handler
    let portalBtn = document.querySelector(".placePortals");
    let portalExists = false;
    portalBtn.addEventListener("click", () => {
        if (!portalExists) {
            portalExists = true;
            grid.placePortals();
            portalBtn.innerText = "Remove Portals";
        }
        else if (portalExists){
            portalExists = false;
            grid.removePortals();
            portalBtn.innerText = "Place Portals";
        }
    });

    let clearBoard = document.querySelector(".resetBoard")
    clearBoard.addEventListener("click", () => {
        grid.resetBoard();
    })

    // Drop down functionality for algorithms
    let dropbtn = document.querySelector(".dropbtn");
    let dropdownContent = document.getElementById("myDropdown");

    dropbtn.addEventListener("click", function() {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });

    // algo selection logic
    let algo = null;
    let visualize = document.querySelector(".visualize");
    let informationDiv = document.getElementById("information");
    visualize.addEventListener("click", () => {
        if (algo === null) {
            visualize.innerText = "Select an algorithm!";
        }
        else if (algo === "bfs") {
            let start = document.querySelector(".start");
            let end = document.querySelector(".end");
            let route = new Route(grid, start, end);
            let pathFound = route.runBFS();
            if (pathFound) route.backTrack();
        }
        else if (algo === "dfs") {
            if (portalExists) {
                let h1 = document.createElement("h1");
                h1.innerText = "Portals will not work on DFS until the portal node is at the top of the stack!"
                informationDiv.appendChild(h1);
            }
            let start = document.querySelector(".start");
            let end = document.querySelector(".end");
            let route = new Route(grid, start, end);
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
    let dropWallbtn = document.getElementById("wallDropBtn");
    let wallDropDownContent = document.querySelector(".auto-wall-dropdown");
    dropWallbtn.addEventListener("click", () => {
        if (wallDropDownContent.style.display === "block") {
            wallDropDownContent.style.display = "none";
        } else {
            wallDropDownContent.style.display = "block";
        }
    });

    // logic for auto generate walls


    




});









