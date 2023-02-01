# GroupProject-1
Boot Camp Challenge 6
Interactive Front-End Application

## About
This project is a a calendar app that generates three random activities and displays the weather for each day. It's built on HTML, CSS, Javascript, TailwindCSS, and utilizes free API's to fetch specific data. 

### Deployed URL
[Deployed URL](https://jacobduncan17.github.io/GroupProject-1/)

## Summary
This interactive front-end application generates three randomized activities along with the weather for that day so that users can chose an activity that suits the forecast. For example, if the weather is nice, the user will have the ability to look at the forecast and select an outdoor activity. Once a user loads the application they are presented with the current day and three activities for that specific day. The user can select one of the three activities to complete. If the user completes the activity, they can select the "complete" button and their total score will increased by one point. If the user decides not to complete that specific activity they have the option to give up and return to the activities. The application uses local storage so that end users can click the logged activities function to view their previous activities. The application utilizes Bored.api to generate random activities with relevant data, it uses Day.js for time tracking and uses Tomorrow.io to fetch daily weather.


## User Story
```
GIVEN I am bored and have some extra time on my hands
WHEN I load the application
THEN I am presented with the current day, the weather for that day, and three randomized activities for that day
WHEN I accept an activity
THEN the other two activity options are hidden and I am presented with the activity I selected
WHEN I click on the activity selected
THEN I am presented with an option to complete the activity or give up
WHEN I have accepted and completed the daily activity presented to me
THEN my overall score increases by 1 point
WHEN I don't want to do an activity 
THEN I have the option to give up and try another activity
WHEN I don't like the activities presented to me for that day
THEN I have the option to generate three new random activities
WHEN I click the logged activities button
THEN I am presented with a list of completed activities 
WHEN I am stuck and need help
THEN I have an option to view the rules of the game at any point in time
```

## Landing Page
![Application on page load](/assets/images/landing-page.png)

## Activity Options
![Randomized activities to choose from](/assets/images/activity-options.png)

## Selected Daily Activity
![Page once an activity has been selected](/assets/images/selected-daily-activity.png)

## Activity Log
![Log of completed activities](/assets/images/activity-log.png)