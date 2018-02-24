/* global $ */
document.addEventListener("DOMContentLoaded", function(event){
  

let colorPicker = "#000000";

let drag = false;
//Initiate and reset user-defined grid
const sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function(e) {
    e.preventDefault();
    reset();
    drawGrid();
});


//Change value of color on change
$("#colorPicker").change(function() {
  colorPicker = $(this).val();
});

//Create grid
function drawGrid() {
  const height = $("#height").val();
  const width = $("#width").val();
  for (let i = 1; i <= height; i++) {
    $("#container").append("<div class='row' id='row-i'></div>");
    for (let j = 1; j <= width; j++) {
      $("#container").children().last().append("<div class='column'></div>");
    }
  }
}

//Change cell color on click
$("#container").on("mousedown", ".column", function() {
  drag = true;
  if ($(this).css("background-color") === "rgb(255, 255, 255)") {
    $(this).css("background-color", colorPicker);
  } else {
    $(this).css("background-color", "rgb(255, 255, 255)");
  }
});

//Reset grid
function reset() {
 $('#container').children().remove()
}

//Initiate color by numbers
$("#pictureChoice").change(function() {
  reset();
  $("#height").val(20);
  $("#width").val(20);
  drawGrid();
  const pictureChoice = $(this).val();
  colorByNumbers(pictureChoice);
});

//Create color by numbers image
function colorByNumbers(pictureChoice) {
  switch(pictureChoice){
    case 'smileyFace':
      assignNumbers(smileyPicture)
      break;
    case 'dog':
      assignNumbers(dogPicture);
      break;
    case 'cat':
      assignNumbers(catPicture)
      break;
  }
  }

//Assign numbers
function assignNumbers(pictureChoice) {
  $('.column').each(function(index) {$(this).text((pictureChoice[index]))})
}

//When checked, removes border and numbers
$('#checkBox').change(function(){
    if($(this).is(':checked')) {
        clear()
    } else {
        reinstate()
    }
});

//Remove borders and numbers
function clear(){
  $('.column').css("border","none");
  $('.column').each(function(){
    $(this).text("");
  })
}

function reinstate(){
colorByNumbers(($('#pictureChoice').val()));
  $('.column').each(function(){
    $(this).css("border", "1px solid");
  })
}

const smileyPicture = "1111111111111111111111111111111111111111111111111111111111111111111222221111111111111223333322111111111123333333332111111112333333333332111111123333333333321111112333223332233321111123332233322333211111233333333333332111112333333333333321111123323333333233211111123323333323321111111233322222333211111111233333333321111111111223333322111111111111122222111111111111111111111111111111111111111111111111"


$("#container").on("mouseover", ".column", 
                   function() {
  if (drag==true) {
  if ($(this).css("background-color") === "rgb(255, 255, 255)") {
    $(this).css("background-color", colorPicker);
  } else {
    $(this).css("background-color", "rgb(255, 255, 255)");
  }
  }
});

$("body").on("mouseup", function() {
  drag = false;
});
});