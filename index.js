/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  const hour = parseInt(time.split(':')[0]);
  if (hour < 12) {
    debugger
    return 'Good Morning';
  } else if (hour >= 12 && hour <= 18) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
}



function displayMessage(str) {
  const greeting = document.querySelector('#greeting');
  greeting.innerText = str;
}