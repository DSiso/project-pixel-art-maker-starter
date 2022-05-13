// Select color input
// Select size input
let colorPicker = document.getElementsById('colorPicker').val;
let gridHeight  = document.getElementsById("inputHeight").val;
let gridWidth = document.getElementById("inputWidth").val;
let table = document.getElementById("pixelCanvas").val;
let form = document.getElementById("sizePicker").val;


// When size is submitted by the user, call makeGrid()
form.addaeventListener('submit', function(e) {
    e.preventDefault();
    makeGrid();
});

table.addaeventListener('click', function(e) {
    if (e.target.nodeName === 'TD') {
        e.target.style.backgroundColor = colorPicker.value;
    }
})


function makeGrid() {
for (let i = 0; i < gridHeight.value; i++) {
    let row = pixelCanvas.insertRow(0);
    for (let j = 0; j < gridWidth.value; j++) {

    }
}

    // Your code goes here!
   
    