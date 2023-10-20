import Grid from "./scripts/grid";
import Route from "./scripts/route";

let grid = null;

document.addEventListener("DOMContentLoaded", () => {
    // console.log("Hello from index.js");
    const gridContainer = document.querySelector(".grid-container");
    grid = new Grid(gridContainer);

    let visualizeBFS = document.querySelector(".visualizeBFS");
    let visualizeDFS = document.querySelector(".visualizeDFS");

    visualizeBFS.addEventListener("click", () => {
        let start = document.querySelector(".start");
        let end = document.querySelector(".end");
        let route = new Route(grid, start, end);
        let pathFound = route.runBFS();
        if (pathFound) route.backTrack();
    });

    visualizeDFS.addEventListener("click", () => {
        let start = document.querySelector(".start");
        let end = document.querySelector(".end");
        let route = new Route(grid, start, end);
        let pathFound = route.runDFS();
        if (pathFound) route.backTrack();
    });
});









