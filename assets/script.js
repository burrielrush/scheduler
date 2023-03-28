document.addEventListener("DOMContentLoaded", function () {
  for (var i = 9; i <= 17; i++) {
    var timeBlockId = "hour-" + i;
    var userInput = localStorage.getItem(timeBlockId);
    $("#" + timeBlockId + " .description").val(userInput);
  }

  $(".saveBtn").on("click", function () {
    var userInput = $(this).siblings(".description").val();
    var timeBlockId = $(this).parent().attr("id");
    localStorage.setItem(timeBlockId, userInput);
  });

  function updateTime() {
    var now = new Date();
    var datetime = document.getElementById("datetime");
    datetime.innerHTML = now.toLocaleString()};
  

  updateTime();
  setInterval(updateTime, 1000);

  var currentHour = new Date().getHours();

  // loop through each time-block div and add a class based on its time status
  $(".time-block").each(function () {
    // get the hour from the div's id attribute
    var blockHour = $(this).attr("id").substring(5);

    console.log(currentHour);
    console.log(blockHour);
    
    // compare the block hour to the current hour
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
  $(".clearBtn").on("click", function () {
    localStorage.clear(); // Clear all data stored in localStorage
    // Clear the text areas for all time blocks
    $(".description").each(function () {
      $(this).val("");
    });
  });
});
