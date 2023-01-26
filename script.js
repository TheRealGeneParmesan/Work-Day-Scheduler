// Calls dayjs library to get the day and the hour, which we then display at the top of our HTML page. 
$(function () {
  var now = dayjs()
  var hour = now.hour()

  var currentTime = $('#currentTime').text(hour + ":00 PM")
  var currentDay = $('#currentDay').text(now)

  // Started by creating an event for when we click the save button then targetted the textarea class and the parent ID in order to set the objects to storage. 
  $('.saveBtn').on('click', function () {
    console.log($(this).siblings(".chocolate").val())
    var textArea = $(this).siblings(".chocolate").val()
    var ID = $(this).parent().attr("id")
    localStorage.setItem(ID, textArea);
  })

  // We save in storage here using the for each jquery to go through each div ID to make sure that whatever we type in the text area, which is class "chocolate" is saved using .val. We then run the checkCurrentHour function.

  $('.time-block').each(function () {
    var saveID = $(this).attr("id")
    $(this).children(".chocolate").val(localStorage.getItem(saveID))
  })
  checkCurrentHour(hour)
});

// In this function we are using the hour variable that we set above, which uses day.js to check the time and use an if statement to check if each hour is greater than or equal to the current hour and if so, to set the text area to grey, if they are equal to set it to red and if it's less than the hour to set it to green since that will be future events. 

function checkCurrentHour(hour) {
  if (hour >= 9) {
    let hourNine = $('#hour-9')
    hourNine[0].style.backgroundColor = "#d3d3d3"

    if (hour == 9) {
      hourNine[0].style.backgroundColor = "#ff6961"
    }

    if (hour < 9) {
      (hourNine[0].style.backgroundColor = "#77dd77")
    }
  }

  if (hour >= 10) {
    let hourTen = $('#hour-10')
    hourTen[0].style.backgroundColor = "#d3d3d3"

    if (hour == 10) {
      hourTen[0].style.backgroundColor = "#ff6961"
    }

    if (hour < 10) {
      (hourTen[0].style.backgroundColor = "#77dd77")
    }
  }
  if (hour >= 11) {
    let hourEleven = $('#hour-11')
    hourEleven[0].style.backgroundColor = "#d3d3d3"

    if (hour == 11) {
      hourEleven[0].style.backgroundColor = "#ff6961"
    }

    if (hour < 11) {
      (hourEleven[0].style.backgroundColor = "#77dd77")
    }
  }

  if (hour >= 12) {
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

  if (hour >= 14) {
    let hourTwo = $('#hour-2')
    hourTwo[0].style.backgroundColor = "#d3d3d3"

    if (hour == 14) {
      hourTwo[0].style.backgroundColor = "#ff6961"
    }
    if (hour < 14) {
      (hourTwo[0].style.backgroundColor = "#77dd77")
    }
  }

  if (hour >= 15) {
    let hourThree = $('#hour-3')
    hourThree[0].style.backgroundColor = "#d3d3d3"

    if (hour == 15) {
      hourThree[0].style.backgroundColor = "#ff6961"
    }

    if (hour < 15) {
      (hourThree[0].style.backgroundColor = "#77dd77")
    }
  }

  if (hour >= 16) {
    let hourFour = $('#hour-4')
    hourFour[0].style.backgroundColor = "#d3d3d3"

    if (hour == 16) {
      hourFour[0].style.backgroundColor = "ff6961"
    }
    if (hour < 16) {
      (hourFour[0].style.backgroundColor = "#77dd77")
    }
  }
  if (hour >= 17) {
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
