console.log("Hey JS are you working?");


//Calculation to convert units of time

function convertToDaysLeft(milliseconds) {
    return Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  }

  function convertToHoursLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
  }

  function convertToMinutesLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );
  }

  function convertToSecondsLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60)) / 1000
    );
  }

  function formatCountdownText(days, hours, minutes, seconds) {
    return `${days}d ${hours}h ${minutes}m ${seconds}s left`;
  }

  // countdown initialization

  // set variable for the end of the countdown(deadline)

  let deadline = new Date ("October 31, 2022 13:00");
// set variable to select the H1 that we need 
  let countdown = document.getElementById("countdown")
  //get rid of the loading countdown text that we added in the html
  countdown.innerHTML = " "; 

  function setcountdown () {
    let now = new Date ();
    let timeleft = deadline.getTime() - now.getTime();
  

  // store time converted variable in own variable to use in final display
  let daysleft = convertToDaysLeft(timeleft)
  let hoursleft = convertToHoursLeft(timeleft)
  let minutesleft = convertToMinutesLeft(timeleft)
  let secondsleft = convertToSecondsLeft(timeleft)

  countdown.innerHTML = formatCountdownText( daysleft,
   hoursleft, minutesleft, secondsleft); 
  }
  setcountdown(setcountdown, 1000);

  
