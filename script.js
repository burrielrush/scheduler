document.addEventListener('DOMContentLoaded', function() {

    
    for (var i = 9; i <= 17; i++) {
      var timeBlockId = 'hour-' + i;
      var userInput = localStorage.getItem(timeBlockId);
      $('#' + timeBlockId + ' .description').val(userInput);
    }
  
    $(".saveBtn").on("click", function() {  
      var userInput = $(this).siblings(".description").val(); 
      var timeBlockId = $(this).parent().attr("id");  
      localStorage.setItem(timeBlockId, userInput);
    });
  
    function updateTime() {
      var now = new Date();
      var datetime = document.getElementById('datetime');
      datetime.innerHTML = now.toLocaleString([], {hourCycle: 'h23', hour: '2-digit', minute: '2-digit'});
    }
    
    
    updateTime();
    setInterval(updateTime, 1000); 
  
var currentHour = new Date().getHours();

// loop through each time-block div and add a class based on its time status
$('.time-block').each(function() {

  // get the hour from the div's id attribute
  var blockHour = ($(this).attr('id').substring(5));

console.log(currentHour)
console.log(blockHour)
  // compare the block hour to the current hour
  if (blockHour < currentHour) {
    $(this).addClass('past');
  } else if (blockHour === currentHour) {
    $(this).addClass('present');
  } else {
    $(this).addClass('future');
  }
});
$(".clearBtn").on("click", function() {  
  localStorage.clear();  // Clear all data stored in localStorage
  // Clear the text areas for all time blocks
  $(".description").each(function() {
    $(this).val("");
  });
});


  });

  
      // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    // Listen for click events on the save button

  

    // TODO: Add code to apply the past, present, or future class to each time block
    // by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    // Get the current hour of the day


    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    