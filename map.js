const tbl = document.getElementById("grid");
const tblBody = document.createElement("tbody");

const headers = document.getElementById("header-cell");
const entryCells = document.getElementById("grid-cell");

function makeInput(e) {
    e.innerHTML = '<input value="'+e.innerText+'">';
}