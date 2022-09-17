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

const openEl = document.getElementById('open');
const el1 = document.getElementById('el1');
const el2 = document.getElementById('el2');
const el3 = document.getElementById('e3');
const currentDay = document.getElementsByClassName('lead');
const el4 = document.getElementById('el4');
// openEl.addEventListener('click', planner);

// function planner(){
//     openEl.classList.add('hide');
//     el1.classList.remove('hide');
//     el2.classList.remove('hide');
//     el3.classList.remove('hide');
//     el1.currentDay.remove('hide');
//     el4.classList.remove('hide');
//     upDateTime()
// }

//this portion of the time format sets time instantly on the page
const time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(time);

function upDateTime(){
const time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(time);
}
// the interval recalss the function upDateTime every second keepingthe time current.
setInterval(upDateTime,1000);



