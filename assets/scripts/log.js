var activities = $("#cards");

var logActivities = function() {
    for (let i = 0; i < 365; i++) {
        if (localStorage.getItem("activity" + i)) {
            var activity = JSON.parse(localStorage.getItem("activity" + i))
            var activityCard = document.createElement("h2")
            activityCard.textContent = activity.description
            activities.appendChild(activity)
        } else {
            return
        }
    }
}

logActivities()