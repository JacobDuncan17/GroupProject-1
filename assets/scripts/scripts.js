// Help Modal
var helpModal = $('#help-modal');
var helpButton = $('#help-button');
var closeModal = $('#close-modal');

$(document).ready(function () {
    closeModal.click(function () {
        helpModal.hide();
    });
    helpButton.click(function () {
        helpModal.show();
    });
});

const today = dayjs()
const tomorrow = today.add(1, "day")
const dayAfterTomorrow = today.add(2, "day")

$(function () {
    $("#today").text(today.format("MMM Do, YYYY"))
    $("#todayDay").text(today.format("dddd"))
    $("#tomorrow").text(tomorrow.format("MMM Do, YYYY"))
    $("#tomorrowDay").text(tomorrow.format("dddd"))
    $("#dayAfterTomorrow").text(dayAfterTomorrow.format("MMM Do, YYYY"))
    $("#dayAfterTomorrowDay").text(dayAfterTomorrow.format("dddd"))
});

completeButton = $("#complete-activity");
completeButton.hide();
const generateActivity = document.querySelector("#generateActivityBtn");
generateActivity.onclick = () => {
    activity.style.display = "flex";
    generateActivity.style.display = "none"
    bored();
}
const boredApi = 'http://www.boredapi.com/api/activity/'
const activity = document.querySelector("#activityText1");
function bored() {
    fetch(boredApi)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let boredApiData = data;
            const dataString = JSON.stringify(boredApiData.activity);
            activity.textContent = boredApiData.activity;
            completeButton.show();
        })
}

// Complete Activity
var storeActivity = function (name) {
    completedActivity = name.textContent
    dayCompleted = today.format("MMM DD, YYYY");
    var completedActivity = {
        description: completedActivity,
        day: dayCompleted
    }
    // Create a local storage object for completed activity
    i = 1;
    while (i < 365) {
        if (!localStorage.getItem("Activity0")) {
            localStorage.setItem("Activity0", JSON.stringify(completedActivity));
            i = 365;
        } else if (!localStorage.getItem("Activity" + i)) {
            localStorage.setItem("Activity" + i, JSON.stringify(completedActivity));
            i = 365;
        }
        i++;
    }
}

completeButton.click(function () {
    activity.style.backgroundColor = "aquamarine";
    activity.style.color = "#3a3335";
    completeButton.hide();
    storeActivity(activity);
});

$("#today").text(today.format("MMM Do, YYYY"))
$("#todayDay").text(today.format("dddd"))
$("#tomorrow").text(tomorrow.format("MMM Do, YYYY"))
$("#tomorrowDay").text(tomorrow.format("dddd"))
$("#dayAfterTomorrow").text(dayAfterTomorrow.format("MMM Do, YYYY"))
$("#dayAfterTomorrowDay").text(dayAfterTomorrow.format("dddd"))

//Score modal
const scoreModalbtn = document.querySelector("#activityText1")
const scoreModal = document.querySelector("#small-modal")
const scoreModalscoreBtn = document.querySelector("#score1")
const scoreModalgiveUp = document.querySelector("#giveUp");
const scoreModalclose = document.querySelector("#scoreModalClose");
const score = document.querySelector("#scorePoints");
let count = 0;
scoreModalbtn.onclick = ()=>{
    scoreModal.style.display = "flex";
}
scoreModalscoreBtn.onclick = ()=>{
    count ++;
    scorePoints.innerHTML = count;
    scoreModal.style.display = "none"
}
scoreModalgiveUp.onclick = ()=>{
    scoreModal.style.display = "none"
}
scoreModalclose.onclick = ()=>{
    scoreModal.style.display = "none"
}

$("#today").text(today.format("MMM Do, YYYY"))
$("#todayDay").text(today.format("dddd"))
$("#tomorrow").text(tomorrow.format("MMM Do, YYYY"))
$("#tomorrowDay").text(tomorrow.format("dddd"))
$("#dayAfterTomorrow").text(dayAfterTomorrow.format("MMM Do, YYYY"))
$("#dayAfterTomorrowDay").text(dayAfterTomorrow.format("dddd"))

