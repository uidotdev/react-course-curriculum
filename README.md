<img src="https://tylermcginnis.com/tylermcginnis_glasses-300.png" width="300" align="right">

Curriculum for React Fundamentals Course
========

#### For more information on TylerMcGinnis.com, [click here](http://tylermcginnis.com)

## Objective
Build a functioning Weather app using the [Open Weather API](http://openweathermap.org/api). The end result of this project can be found [HERE](http://artist-submarine-48713.netlify.com/).

## Notes
The goal here is to give you just enough guidance for you to struggle without drowning. Note that the steps below are just suggestions. The ideal situation is you look at the completed project, then you build it. However, if you're not up for such things, feel free to follow the (vague by design) steps below. If you get stuck, all steps have coinciding branches for you to reference as a last case scenario.

## Step 0: Examine the Final Product
 * Head over [HERE](http://artist-submarine-48713.netlify.com/) and play around with the final project. Think about how you would separate your different components and functionality.

## Step 1: Set up a HelloWorld Component
Before I ever start a React app I always create a HelloWorld component just to make sure that I've tied everything together properly. I don't expect you to have all this memorized, but do your best in using proper documentation to wire up everything. If you do get stuck you can refer to the 'step1' branch.

 * Fork this repository then clone your fork
 * npm install the dependencies you'll need
 * Create and configure your webpack.config.js file
 * In your app directory create and configure your index.html file
 * In your app directory create and configure your index.js file to render a HelloWorld component
 * Start webpack and make sure everything is working

## Step 2: Add UI for Home

 * Make your UI for the home screen look similar to the image below. You don't need to tie up any of the input fields or buttons just yet.

<img src="https://cloud.githubusercontent.com/assets/2933430/21000915/af4fef50-bcda-11e6-97ea-c4fd2615af5b.png" width="400">

## Step 3: ADD UI for Header

 * Finish the UI for the Header component.
 * As of right now, my app looks like this (with no actual functionality)

<img src="https://cloud.githubusercontent.com/assets/2933430/21000851/3c99be96-bcda-11e6-8dd9-0812bd769229.png" width="400">

## Step 4: Wire up the Weather Button
In this step we're going to write up the button to our weather API, though we'll just log the result from now.

 * Tie up your input fields so that the user can input a city into them.
 * With the API key we're using, you don't need an API key, but you're going to get rate limited pretty quick. It's free and probably worth it. For more info [click here](http://openweathermap.org/appid).
 * We're going to be querying the weather API for two types of data. A specific city's current weather, and the 5 day forecast for a specific city.
 * Those two endpoints are,
      Current Weather: http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY
      5 Day Forecast: http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY&cnt=5
 * Tie up the "Get Weather" button to be able to grab whatever city is in the input field's current weather and log it to the console.
 * Once the previous step is working, also create the functionality for the 5 day forecast request and test is by hooking it up to the "Get Weather" button. Once it works, change it back to get the current weather.
 * If you get stuck with the API check out the "step5" branch. My code is located under /app/utils/api.js

## Step 5: New /forecast route
 * Add a new Route to your route config of 'forecast'.
 * Create the component(s) that will become active when the user goes to /forecast
 * Now make it so instead of calling the weather API when we click on the "Get Weather" button, go to this /forecast route we just created with a route param of the city. Ex: /forecast?city=St.%20George,%20Utah
 * As of right now, my app looks like this

<img src="https://cloud.githubusercontent.com/assets/2933430/25068067/f0bad262-2214-11e7-8597-577e13627b97.png" width="400">

## Step 6: Make /forecast show loading and fetch
Before we had our API request when the user clicked on the "Get Weather" button. However, in Step 6 we removed that and are instead routing to the /forecast route. Now what we need to do it when someone reaches the /forecast route, show a loading indicator while the component fetches the city data from the weather API.

 * When someone goes to /forecast, have that component that becomes active fetch the forecast for the specific city which should probably be a route parameter.
 * Also make it so this component initially renders "Loading" while the request to the weather API is being made.
 * When the request comes back, console.log that data and set loading to false.
 * By this point when your user goes to /forecast, they should see a loading screen then when the loading screen goes away they should see the forecast data in the console.

## Step 7: Finish the UI for /forecast
 * At this point the component that becomes active when a user navigates to /forecast should have all the data it needs to render properly. So, make that UI look nice.
 * As of right now, my app looks like this

<img src="https://cloud.githubusercontent.com/assets/2933430/21000853/3c9b2bbe-bcda-11e6-88b8-3619aa319bcd.png" width="400">

## Step 8: Make each day clickable
Now we want to make it so you can click on a specific day and we'll be taken to a new route which displays that day's weather information more in depth.
 * Create a new /detail/SOME-CITY route
 * Create the component(s) that are going to be active when that route is matched.
 * Add a click handler to every day that when clicked, will go to the new /detail/SOME-CITY route passing through that specific days data through as state.
 * At this point you should have a new route that looks something like this

<img src="https://cloud.githubusercontent.com/assets/2933430/21000855/3c9e3660-bcda-11e6-8f0e-4fc7d26306a7.png" width="400">

## Step 9: Finish the UI for the /detail route
At this point the /detail route should have all the data it needs to render.

 * Finish the app by finishing the UI for the /detail route.

The final /detail route should now look like this.

<img src="https://cloud.githubusercontent.com/assets/2933430/21000854/3c9cec88-bcda-11e6-9f94-8912e3dd9956.png" width="400">

## Step 10: Build for production and host it

 * Configure your webpack.config.js settings to build for production.
 * Host your app.

## Congrats!
If you got through this, great job. Take a look at my code and compare to what we did differently.

Suggestion or just want to say thanks? You can find me on Twitter at [@tylermcginnis](http://twitter.com/tylermcginnis)
