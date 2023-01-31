// Multiple API keys in the event a too many request errors (uncomment when wanting to make request)
// const API_KEY = "gRRRRVjxrc405mmY6eWFvSffWXP9BewE"
// const API_KEY = "jjzTJr7q0YhPamWmrzRNvv4qzaqZ80vj"
// const API_KEY = "mecIrjhSkzaHiivR7ArVZyTWWxEgO9VD"
// const API_KEY = "tcwEB37u1ckcavIFDQnnU94EpfxREhpM"
// const API_KEY = "KTqQiaj9iOfDTivkD9dAELE3BVLfo9Pp"
// const API_KEY = "ikHyis6uANAyt4tzT0WxcJd0Cgs6bpH1"

// Map of precipitation types based on tomorrow.io API
const precipitationTypes = {
  "1": "Rain 🌧️",
  "2": "Snow ❄️",
  "3": "Freezing Rain 🥶🌧️",
  "4": "Ice Pellets 🧊"
}

// Gets the average value of an array of numbers
function getAverage(arr){
  let total = 0
  arr.forEach(e => {
    total+=e
  })
  return Math.round(total/arr.length)
}

// Gets the mode value of an array of any type
function getMostOccurringValue(arr){
  let obj = {}
  arr.forEach(e => {
      if(obj[e] == null){
          obj[e] = 1
      } else {
          obj[e] += 1
      }
  })
  return Object.keys(obj).reduce((a,b) => obj[a] > obj[b] ? a : b)
}

// IF geolocation is successful, save lat/long to local storage
const successCallback = (position) => {
  localStorage.setItem("lat", position.coords.latitude);
  localStorage.setItem("long", position.coords.longitude);
};

// IF geolocation retrieval is not successful, log error as to why it was not successful
const errorCallback = (error) => {
  console.log(error);
};

// DEFINE method to fetch data from API
async function fetchTimelines(lat, long, times_steps = "1d", start_time, end_time) {
  const options = {
    method: 'GET',
    headers: { accept: 'application/json', 'Accept-Encoding': 'gzip' }
  };
  let url = `https://api.tomorrow.io/v4/timelines?location=${lat}%2C${long}&fields=temperature&fields=humidity&fields=precipitationProbability&fields=precipitationType&units=imperial&timesteps=${times_steps}&startTime=${escape(start_time)}&endTime=${escape(end_time)}&apikey=${API_KEY}`
  let response = await fetch(url);
  let data = await response.json()
  return data
}

// GET weather data for the next three days based on lat/long
async function getWeatherData(lat, long) {
  let start_time
  let end_time
  let response
  var responses = []

  // ESTABLISH start time depending on the index
  for(var i = 0; i < 3; i++){
    if(i==0){
      start_time = today.toISOString()
      end_time = today.endOf('day').toISOString()
    } else if(i==1){
      start_time = tomorrow.startOf('day').toISOString()
      end_time = tomorrow.endOf('day').toISOString()
    } else {
      start_time = dayAfterTomorrow.startOf('day').toISOString()
      end_time = dayAfterTomorrow.endOf('day').toISOString()
    }
    // TODO - uncomment when wanting to use actual api
    // response = await fetchTimelines(lat, long, "1h", start_time, end_time)
    // responses.push(response)
  }
  // TODO - change to responses when not wanting to mock
  return mock_response
}

// Parse weather data
function parseRawWeatherData(weather_data){
  let parsed_response = {}

  weather_data.forEach((e, index) => {
    
    let temperatures = []
    let humidity = []
    let precipitationProbability = []
    let precipitationType = []

    e.data.timelines[0].intervals.forEach(i => {
      temperatures.push(i.values.temperature)
      humidity.push(i.values.humidity)
      precipitationProbability.push(i.values.precipitationProbability)
      precipitationType.push(i.values.precipitationType)
    })

    parsed_response[index] = {
      temperature: getAverage(temperatures),
      humidity: getAverage(humidity),
      precipitationProbability: getAverage(precipitationProbability),
      precipitationType: getMostOccurringValue(precipitationType)
    }
  });
  return parsed_response
}

// UPDATE page with our parsed weather data
function updatePageWithWeatherData(parsed_weather_data){
  let jqueryId
  Object.keys(parsed_weather_data).forEach(e => {
    if(e==0){
      jqueryId="todayWeather"
    } else if(e==1){
      jqueryId="tomorrowWeather"
    } else {
      jqueryId="dayAfterTomorrowWeather"
    }

    $(`#${jqueryId}`).append(`
      <div class="grid grid-cols-1 flex justify-items-center ">
        <div>${parsed_weather_data[e].temperature}°F</div>
      </div>
      <div class="grid grid-cols-1 flex justify-items-center ">
        <div>${parsed_weather_data[e].humidity}% Humidity</div>
      </div>
    `)

    if(parsed_weather_data[e].precipitationProbability > 0){
      $(`#${jqueryId}`).append(`
        <div class="grid grid-cols-1 flex justify-items-center ">
          <div>${parsed_weather_data[e].precipitationProbability}% chance of ${precipitationTypes[parsed_weather_data[e].precipitationType]}</div>
        </div>
      `)
    } else {
      $(`#${jqueryId}`).append(`
        <div class="grid grid-cols-1 flex justify-items-center ">
          <div>Clear ☀️</div>
        </div>
      `)
    }
  })
}

//RUN on page load
$(async function () {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  var lat = localStorage.getItem("lat") 
  var long = localStorage.getItem("long")
  if(lat == null &&  long == null){
    alert("For this application to successfully load proper weather data, please enable tracking services in your browser.")
  } else {
    const weather_data = await getWeatherData(lat, long)
    const parsed_weather_data = parseRawWeatherData(weather_data)
    updatePageWithWeatherData(parsed_weather_data)
  }
});

