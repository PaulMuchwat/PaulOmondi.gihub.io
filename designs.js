// Select color input
// Select size input
var width, height, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid(height, width);
})


function makeGrid(x, y) {

// Your code goes here!
    $('tr').remove();

    for (var i = 1; i <= x; i++){
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (var j = 1; j <=y; j++) {
            $('#table' + i).append('<td></td>');
        }
    }

    //cell color adder
    $('td').click(function addColor(){
        color = $('#colorPicker').val();
        $(this).attr('style') ? $(this).removeAttr('style') : $(this).attr('style', 'background-color:' + color);
    })
}
