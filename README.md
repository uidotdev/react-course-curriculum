<img src="http://www.reactjsprogram.com/images/reactjsprogram-500.png" width="250" align="right">

React.js Fundamentals Curriculum
========

##Objective
Build a functioning Weather app using the [Open Weather API](http://openweathermap.org/api).

## Notes
The goal here is to give you just enough guidance for you to struggle without drowning. Note that the steps below are just suggestions. The ideal situation is you look at the completed project, then you build it. However, if you're not up for such things, feel free to follow the steps. If you get stuck, all steps have coinciding branches for you to reference as a last case scenario .

##Step 1: Set up a HelloWorld Component
Before I ever start a React app I always create a HelloWorld component just to make sure that I've tied everything together properly. I don't expect you to have all this memorized, but do your best in using proper documentation to wire up everything. If you do get stuck you can refer to the 'step1' branch.

 * Fork this repository then clone your fork
 * npm install the dependencies you'll need
 * Create and configure your .babelrc file
 * Create and configure your webpack.config.js file
 * In your app directory create and configure your index.html file
 * In your app directory create and configure your index.js file to render a HelloWorld component
 * Start webpack and make sure everything is working

##Step 2: Let React Router handle Routing
The next step I take is setting up React Router to handle my routing. Before I jump into any real coding, again, I make sure everythig is wired up correctly.

 * Move your HelloWorld component to a Main.js file (I have mine located in a containers folder)
 * Set up your route configuration file to activate the Main component whenever a user hits the index '/' path of your app.
 * Now instead of rendering <HelloWorld /> to the DOM, render your routes configuration.

## Step 3: Add UI for Home

 * Create a Home component and set it to the IndexRoute in your route configuration.
 * At this point when you go to localhost:8080 you should see any UI the Main component spits out as well as any UI the Home component spits out.
 * Add the full page background image to the Home component as well as the input field and button. At this point, my app looks like this.
 <img src="http://www.reactjsprogram.com/images/home-ui.png" width="400">