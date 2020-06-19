// when something is entered at a time block, to save it it looks like saving an object with a pair of the time in question and the todostring
// compare row value (hr number/24) to current time, or assign value for comparison
// so for all of the blocks, (array corresponding)
// I need to make a timestamp, an input, and a submit button
// middle input needs conditional styling based on current/past/future
// use isBefore and isAfter notation to call

// textarea.val() define to var, use that var to pop
// work with this.target and if target.class=button

// running a for loop to check for filling
// assign each row a value based on hour of day

$("#currentDay").text(moment().format("[Today is] dddd, MMMM Do YYYY"));
var currentTime = moment().format("H");
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var timeEl = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

function generateBlocks() {
  // make time block
  newHour = $("<div>");
  newHour.addClass("col col-2 hour");
  newHour.text(timeEl[i]);
  newHour.appendTo(`#${hours[i]}`);
  // make input
  input = $("<input>");
  input.addClass("col col-8 textarea");
  // colorizing each
  if (currentTime === hours[i]) {
    input.addClass("present");
  } else if (currentTime > hours[i]) {
    input.addClass("past");
  } else input.addClass("future");
  input.text(hours[i]);
  input.appendTo(`#${hours[i]}`);
  // make button
  newBtn = $("<button>");
  newBtn.addClass("col col-2 saveBtn text-center");
  newBtn.html('<h1><i class="fas fa-save"></i></h1>');
  newBtn.appendTo(`#${hours[i]}`);
}
// making all the blocks and colorizing via function above
for (i = 0; i < 9; i++) {
  generateBlocks();
}
function storeEntry() {
    if ($(this).prev()) {
        var thingtoAdd = {};
        thingtoAdd["time"] = parseInt($(this).prev().text());
        thingtoAdd["entry"] = $(this).prev().val().trim();
        console.log(thingtoAdd);
        if (thingtoAdd.entry) {
            localStorage.setItem(
            parseInt($(this).prev().text()),
            JSON.stringify($(this).prev().val().trim())
          );
        }
}

$("button").click(function (event) {
  // var parentId = $(this).parent("row")
  if ($(this).prev()) {
    var thingtoAdd = {};
    thingtoAdd["time"] = parseInt($(this).prev().text());
    thingtoAdd["entry"] = $(this).prev().val().trim();
    console.log(thingtoAdd);
    if (thingtoAdd.entry) {
        localStorage.setItem(
        parseInt($(this).prev().text()),
        JSON.stringify($(this).prev().val().trim())
      );
    }
  }
  // replace triestostore with actual value keyed from row it's in, check parent, was trying to use VALUE to compare.
  // if the string retrieved for the number is not empty
});

// parseInt()

// parseInt($(this).prev().text())
