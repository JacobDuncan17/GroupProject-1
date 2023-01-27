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
 
 //Boredapi integration
const generateActivity = document.querySelector("#generateActivityBtn");
generateActivity.onclick = ()=>{
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
            })
}

//Day.js 
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

// completeButton.click(function () {
//     activity.style.backgroundColor = "aquamarine";
//     activity.style.color = "#3a3335";
//     completeButton.hide();
// });
// completeButton = $("#complete-activity");
// completeButton.hide();
