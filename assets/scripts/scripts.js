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

completeButton = $("#complete-activity");
completeButton.hide();
const generateActivity = document.querySelector("#generateActivityBtn");

const boredApi = 'http://www.boredapi.com/api/activity/'
const activity1 = document.querySelector("#activityText1");
const activity2 = document.querySelector("#activityText2");
const activity3 = document.querySelector("#activityText3");

async function getData(activity) {
const response = await fetch(boredApi);
const data = await response.json();
const dataString = JSON.stringify(data.activity);
activity.textContent = data.activity;

return data.activity;
}

getData(activity1);
getData(activity2);
getData(activity3);
const testBtn = document.querySelector("#testBtn");
const testBtn2 = document.querySelector("#testBtn1");
const testBtn3 = document.querySelector("#testBtn2");
const todayCard1 = document.querySelector("#todayCard1");
const todayCard2 = document.querySelector("#todayCard2");
const todayCard3 = document.querySelector("#todayCard3");
testBtn.addEventListener("click", test);
function test(){
    localStorage.setItem("Activity", activity1.textContent);
    todayCard2.style.display = "none";
    todayCard3.style.display = "none";
    testBtn.style.display = "none";
};
testBtn2.addEventListener("click", test1);
function test1(){
    localStorage.setItem("Activity", activity2.textContent);
    todayCard1.style.display = "none";
    todayCard3.style.display = "none";
    testBtn2.style.display = "none";
};
testBtn3.addEventListener("click", test2);
function test2(){
    localStorage.setItem("Activity", activity3.textContent);
    todayCard1.style.display = "none";
    todayCard2.style.display = "none";
    testBtn3.style.display = "none";
};


completeButton.click(function () {
    activity.style.backgroundColor = "aquamarine";
    activity.style.color = "#3a3335";
    completeButton.hide();
    storeActivity(activity);
});

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

$(function () {
    $("#today").text(today.format("MMM Do, YYYY"))
    $("#todayDay").text(today.format("dddd"))
});
