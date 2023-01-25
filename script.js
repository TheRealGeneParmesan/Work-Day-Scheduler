// First I have to make sure that I am calling the jquery library
// Then I am creating my global variables. I need to make sure that the buttons have functionality.  
// day.js has to update to the current time and day when you open it. figure out how to do that.
// add code that displays the current date and the current time.  


// Should remove class color in HTML possibly and add it based on time here in JS.
$(function () {
  var now = dayjs()
  var hour = now.hour()

  var currentTime = $('#currentTime').text(hour + ":00 PM")
  var currentDay = $('#currentDay').text(now)
  $('.saveBtn').on('click', function () {
    console.log($(this).siblings(".chocolate").val())
    var textArea = $(this).siblings(".chocolate").val()
    var ID = $(this).parent().attr("id")
    localStorage.setItem(ID, textArea);
  })
  $('.time-block').each(function () {
    console.log($(this))
    var saveID = $(this).attr("id")
    $(this).children(".chocolate").val(localStorage.getItem(saveID))
  })
  checkCurrentHour(hour)
});


function checkCurrentHour(hour) {
  if (hour > 9) {
    let hourNine = $('#hour-9')
    hourNine[0].style.backgroundColor = "#d3d3d3"

    if (hour == 9) {
      hourNine[0].style.backgroundColor = "#ff6961"
    }

    if (hour < 9) {
      (hourNine[0].style.backgroundColor = "#77dd77")
    }
  }

  if (hour > 10) {
    let hourTen = $('#hour-10')
    hourTen[0].style.backgroundColor = "#d3d3d3"

    if (hour == 10) {
      hourTen[0].style.backgroundColor = "#ff6961"
    }

    if (hour < 10) {
      (hourTen[0].style.backgroundColor = "#77dd77")
    }
  }
  if (hour > 11) {
    let hourEleven = $('#hour-11')
    hourEleven[0].style.backgroundColor = "#d3d3d3"

    if (hour == 11) {
      hourEleven[0].style.backgroundColor = "#ff6961"
    }

    if (hour < 11) {
      (hourEleven[0].style.backgroundColor = "#77dd77")
    }
  }

  if (hour > 12) {
    let hourTwelve = $('#hour-12')
    hourTwelve[0].style.backgroundColor = "#d3d3d3"

    if (hour == 12) {
      hourTwelve[0].style.backgroundColor = "#ff6961"
    }

    if (hour < 12) {
      (hourTwelve[0].style.backgroundColor = "#77dd77")
    }
  }
  if (hour >= 13) {
    let hourOne = $('#hour-1')
    hourOne[0].style.backgroundColor = "#d3d3d3"

    if (hour == 13) {
      hourOne[0].style.backgroundColor = "#ff6961"
    }

    if (hour < 13) {
      (hourOne[0].style.backgroundColor = "#77dd77")
    }
  }

  if (hour > 14) {
    let hourTwo = $('#hour-2')
    hourTwo[0].style.backgroundColor = "#d3d3d3"

    if (hour == 14) {
      hourTwo[0].style.backgroundColor = "#ff6961"
    }
    if (hour < 14) {
      (hourTwo[0].style.backgroundColor = "#77dd77")
    }
  }

  if (hour > 15) {
    let hourThree = $('#hour-3')
    hourThree[0].style.backgroundColor = "#d3d3d3"

    if (hour == 15) {
      hourThree[0].style.backgroundColor = "#ff6961"
    }

    if (hour < 15) {
      (hourThree[0].style.backgroundColor = "#77dd77")
    }
  }

  if (hour > 16) {
    let hourFour = $('#hour-4')
    hourFour[0].style.backgroundColor = "#d3d3d3"

    if (hour == 16) {
      hourFour[0].style.backgroundColor = "ff6961"
    }
    if (hour < 16) {
      (hourFour[0].style.backgroundColor = "#77dd77")
    }
  }
  if (hour > 17) {
    let hourFive = $('#hour-5')
    hourFive[0].style.backgroundColor = "#d3d3d3"

    if (hour == 17) {
      hourFive[0].style.backgroundColor = "#ff6961"
    }

    if (hour < 17) {
      (hourFive[0].style.backgroundColor = "#77dd77")
    }
  }

}

// First we are creating a variable to store the textarea class which we renamed to chocolate. 



// first grab text from textarea, then delete textarea, then create new div, then place textareatext in new div's innerhtml. 

// futureEvent()

// creatingEvent()

// // store(); {
// //  descriptionSaved.innerhtml


// saveEventonRefresh(); {
//   saveButtons.addEventListener('click', store())
// }
// Need to be able to click the buttons and give the buttons functionality. Can use query selector to match the buttons. When I click the button next to the event. It saves. 
// we can use an event listener here that stores when clicks. 



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.



