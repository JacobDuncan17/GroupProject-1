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
 