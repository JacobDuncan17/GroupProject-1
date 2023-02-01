// Help Modal
var helpModal = $('#help-modal');
var helpButton = $('#help-button');
var closeModal = $('#close-modal');
const scoreModalbtn = document.querySelector("#activityText1")
const scoreModalbtn2 = document.querySelector("#activityText2")
const scoreModalbtn3 = document.querySelector("#activityText3")
const scoreModal = document.querySelector("#small-modal")
const scoreModalscoreBtn = document.querySelector("#score1")
const scoreModalgiveUp = document.querySelector("#giveUp");
const scoreModalclose = document.querySelector("#scoreModalClose");
const score = document.querySelector("#scorePoints");
const scoreModalHeader = document.querySelector("#scoreModalHeader");

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
scoreModalbtn.disabled = true;
scoreModalbtn2.disabled = true;
scoreModalbtn3.disabled = true;
testBtn.addEventListener("click", test);
function test(){
    localStorage.setItem("Activity", activity1.textContent);
    todayCard2.style.display = "none";
    todayCard3.style.display = "none";
    testBtn.style.display = "none";
    scoreModalbtn.disabled = false;
    scoreModalHeader.textContent = activity1.textContent;
};
testBtn2.addEventListener("click", test1);
function test1(){
    localStorage.setItem("Activity", activity2.textContent);
    todayCard1.style.display = "none";
    todayCard3.style.display = "none";
    testBtn2.style.display = "none";
    scoreModalbtn2.disabled = false;
    scoreModalHeader.textContent = activity2.textContent;
};
testBtn3.addEventListener("click", test2);
function test2(){
    localStorage.setItem("Activity", activity3.textContent);
    todayCard1.style.display = "none";
    todayCard2.style.display = "none";
    testBtn3.style.display = "none";
    scoreModalbtn3.disabled = false;
    scoreModalHeader.textContent = activity3.textContent;
};


completeButton.click(function () {
    activity.style.backgroundColor = "aquamarine";
    activity.style.color = "#3a3335";
    completeButton.hide();
    storeActivity(activity);
});

//Score modal

let count = 0;
//card 1
scoreModalbtn.onclick = ()=>{
    scoreModal.style.display = "flex";
}
scoreModalscoreBtn.onclick = ()=>{
    count ++;
    scorePoints.innerHTML = count;
    scoreModal.style.display = "none"
    scoreModalbtn.style.display = "none"
}
scoreModalgiveUp.onclick = ()=>{
    scoreModal.style.display = "none"
}
scoreModalclose.onclick = ()=>{
    scoreModal.style.display = "none"
}
//card 2
scoreModalbtn2.onclick = ()=>{
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
//card 3
scoreModalbtn3.onclick = ()=>{
    scoreModal.style.display = "flex";
}
scoreModalscoreBtn.onclick = ()=>{
    count ++;
    scorePoints.innerHTML = count;
    scoreModal.style.display = "none"
    scoreModalbtn3.style.display = "none"
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
const card1Head = document.querySelector("#card1Head");
scoreModalscoreBtn.addEventListener("click", function(){
    scoreModalbtn.style.display = "none";
    card1Head.textContent = "Activity complete, come back tomorrow."
})
const card2Head = document.querySelector("#card2Head");
scoreModalscoreBtn.addEventListener("click", function(){
    scoreModalbtn2.style.display = "none";
    card2Head.textContent = "Activity complete, come back tomorrow."
})
const card3Head = document.querySelector("#card3Head");
scoreModalscoreBtn.addEventListener("click", function(){
    scoreModalbtn3.style.display = "none";
    card3Head.textContent = "Activity complete, come back tomorrow."
})

scoreModalgiveUp.addEventListener("click", function(){
    card1Head.textContent = "Dang should've done the activity. Come back tomorrow to try again."
    card2Head.textContent = "Dang should've done the activity. Come back tomorrow to try again."
    card3Head.textContent = "Dang should've done the activity. Come back tomorrow to try again."
    scoreModalbtn3.style.display = "none";
    scoreModalbtn2.style.display = "none";
    scoreModalbtn.style.display = "none";
})