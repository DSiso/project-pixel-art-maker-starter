// Select color input
// Select size input
let canvas = document.getElementById("pixelCanvas");
let color = document.getElementById("colorPicker");
let sizePicker = document.getElementById("sizePicker");
let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWidth");


//function to create grid and assign event listeners to all cells on creation
function makeGrid(height, width) {
    for (let i = 0; i < height; i++) {
        let row = canvas.insertRow(i);
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener("mousedown", function(evt) {
                cell.style.backgroundColor = color.value;
            cell.addEventListener("contextmenu", function(evt) {
                evt.preventDefault();
                cell.style.backgroundColor = "white";
            } )
            } )
        }
    }
}

sizePicker.addEventListener("submit", function(evt) {
    evt.preventDefault();
    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.lastChild);
    }
    makeGrid(height.value, width.value);
});

