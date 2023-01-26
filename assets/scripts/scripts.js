const today=dayjs()
const tomorrow=today.add(1,"day")
const dayAfterTomorrow=today.add(2,"day")

$(function () {
    $("#today").text(today.format("MMM Do, YYYY")) 
    $("#todayDay").text(today.format("dddd")) 
    $("#tomorrow").text(tomorrow.format("MMM Do, YYYY")) 
    $("#tomorrowDay").text(tomorrow.format("dddd")) 
    $("#dayAfterTomorrow").text(dayAfterTomorrow.format("MMM Do, YYYY")) 
    $("#dayAfterTomorrowDay").text(dayAfterTomorrow.format("dddd")) 
 });
 
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




    