import Grid from "./scripts/grid";

document.addEventListener("DOMContentLoaded", () => {
    // console.log("Hello from index.js");
    const gridContainer = document.querySelector(".grid-container");
    const grid = new Grid(gridContainer);
});

