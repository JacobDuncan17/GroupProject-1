var activities = $("#cards");
var h2 = $("#header")
var logActivities = function() {
    for (let i = 0; i < 365; i++) {
        if (localStorage.getItem("Activity")) {
            var activity = JSON.parse(localStorage.getItem("Activity"))
            console.log(activity)
            h2.text(activity)
        } else {
            return
        }
    }
}

logActivities()