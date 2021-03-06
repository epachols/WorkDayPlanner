// necessary var declarations 
$("#currentDay").text(moment().format("[Today is] dddd, MMMM Do YYYY"));
var now = parseInt(moment().format("H"));
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var timeEl = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

// Block maker/data retrieval 
function generateBlocks() {
  // make time block
  $("<div>").addClass("col col-2 hour").text(timeEl[i]).appendTo(`#${hours[i]}`)
  // make input
  input = $("<input>");
  input.addClass("col col-8 h4 h-100");
  // colorizing each -- had to parse the time comparison
  if (now === hours[i]) {
    input.addClass("present");
  } else if (now > hours[i]) {
    input.addClass("past");
  } else input.addClass("future");
  // turning the stored value into the showed value 
  input.text(hours[i]);
  input.val(localStorage.getItem(`${hours[i]}`));
  input.appendTo(`#${hours[i]}`);
  // make button
  newBtn = $("<button>");
  newBtn.addClass("col col-2 saveBtn text-center");
  newBtn.html('<h1><i class="fas fa-save"></i></h1>');
  newBtn.appendTo(`#${hours[i]}`);
}
for (i = 0; i < 9; i++) {
  generateBlocks();
}
// click handler
$("button").click(function (event) {
  var timeInput = parseInt($(this).prev().text());
  var entryInput =  $(this).prev().val();
  localStorage.setItem(`${timeInput}`, entryInput);
});