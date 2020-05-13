/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  const time_ary = string.split(':');
  let hour = parseInt(time_ary[0]);
  let minute = parseInt(time_ary[1]);
  if (hour < 12){
    return 'Good Morning';
  } else if (hour > 17){
    return 'Good Evening';
  } else {
    return 'Good Afternoon';
  }
}


/* Write your implementation of displayMessage() */
function displayMessage(string){
  let x = document.getElementById('greeting');
  x.innerText = string;
}