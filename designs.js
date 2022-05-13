// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
$( "#sizePicker" ).submit(function( event ) {
     event.preventDefault();
     height =$('#inputHeight').val();
     width =$('#inputWidth').val();
     makeGrid(height, width);
     //console.log('Height: ' + height + ' and width: ' + width);
})


function makeGrid(x, y) {
    $('tr').remove();

        }
    }

    //add color to cell
    $('td').click(function addColor() {
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
        
    })
}
