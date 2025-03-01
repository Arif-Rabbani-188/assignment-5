let totalTask = document.getElementById("total-task");
let colorChangeBtn = document.getElementById("color-change-btn");

let uncompletedTask = document.getElementById("uncompleted-task");
let discover = document.getElementById("discover");

let d = new Date();
let date = document.getElementById("date");
let day = document.getElementById("day");
const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "December",
];

day.innerText = weekday[d.getDay()];
date.innerText =
  month[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear();

let activityLog = document.getElementById("activity-log");
let activityBtn = document.getElementById("activity-btn");

function btnDisabled(idName, titleId) {
  alert("Board Updated Successfully");
  let title = document.getElementById(titleId).innerText;
  let id = document.getElementById(idName);
  uncompletedTask.innerText = parseInt(uncompletedTask.innerText) - 1;
  totalTask.innerText = parseInt(totalTask.innerText) + 1;
  id.disabled = true;

  let div = document.createElement("div");

  div.innerHTML = `
        <h1>You Have completed the task <span class=font-bold>"${title}"</span> at ${d.getHours()}:${d.getMinutes()}</h1>
    `;
  div.classList.add("bg-[#f4f7ff]", "p-4", "rounded-xl");
  activityLog.insertBefore(div, activityLog.children[0]);

  if(uncompletedTask.innerText == 0){
    alert("You have completed all the task");
  }
}


function clearActivity(){
    activityLog.innerHTML = ``;
}