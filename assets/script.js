/*Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist*/

const btnEl = document.getElementById('open');
const el1 = document.getElementById('el1');
const el2 = document.getElementById('el2');
const el3 = document.getElementById('el3');
const h1El = document.getElementById('h1');
const bodyEl = document.getElementById('body');
const svBtn = document.querySelector('#svBtn');
const eventEl = document.querySelector('#event');


btnEl.addEventListener('click', planner);

//Adding to local storage
svBtn.addEventListener('click', ()=>{
    localStorage.setItem('Event', eventEl.value);
});

// function planner adds classes to elements to make them gidden and reapper after the button is clicked then calls function upDateTime
function planner() {
    el1.classList.remove('hide');
    el2.classList.add('hide');
    el3.classList.remove('hide');
    bodyEl.classList.remove('colorOne')
    upDateTime()
}

//the const hard sets the current date immediately after the button is clicked.
const time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(time);

// setting date in function helps to recall current time in setInterval.
function upDateTime() {
    const time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(time);
}
// putting the function upDateTime in setInterval keeps the time current by the second
setInterval(upDateTime, 1000);





