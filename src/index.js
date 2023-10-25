import Grid from "./scripts/grid";
import Route from "./scripts/route";

let grid = null;
// let startPos = "";
// let endPos = "";;
// let startPortalPos = "";
// let endPortalPos = "";

document.addEventListener("DOMContentLoaded", () => {
    // console.log("Hello from index.js");
    const gridDiv = document.querySelector(".grid");
    grid = new Grid(gridDiv);

    // place portals event handler
    let portalBtn = document.querySelector(".placePortals");
    let portalExists = true;
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

    // resets board
    let resetBoard = document.querySelector(".resetBoard")
    resetBoard.addEventListener("click", () => {
        if (portalExists){
            portalExists = false;
            grid.removePortals();
        }
        grid.resetBoard();
        portalBtn.innerText = "Place Portals";
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
    let dropWallbtn = document.getElementById("wallDropBtn");
    let wallDropDownContent = document.querySelector(".auto-wall-dropdown");
    dropWallbtn.addEventListener("click", () => {
        if (wallDropDownContent.style.display === "block") {
            wallDropDownContent.style.display = "none";
        } else {
            wallDropDownContent.style.display = "block";
        }
    });

    // logic for modal
    // Get the modal
    let modal = document.getElementById("myModal");

    // Get the button that opens the modal
    let modalBtn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    modalBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // When the user clicks on <span> (x), close the modal
    span.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    




});









