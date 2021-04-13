# Zip code test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To install dependencies please run

### `npm i`

To run in development mode please run

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\

# Test requirements

## Create a new page to display the gallery of dogs:

I created two components - a Dog card and Gallery Page:

The Gallery Page: Makes API request to (https://random.dog/doggos) and loops over the response to render eight dogs

The Dog component contains a switch statement that gets the file extension and then conditionally renders an image or video

## The page should be responsive:

This was achieved using Media queries in Dog.css

## There should be a button to allow the user to fetch a new set of 8 random dogs:

The button is in the Gallery Page component and initiates the fetch using the onClick prop.

## The gallery will initially be empty until the user clicks the button for the first time:

The Gallery Page component uses a ternary to map over the Dog component however if no dog data exists it renders empty divs.

## The page will need support common formats such as png, jpg, gif, mp4 and webm results:

The Dog component contains a switch statement that gets the file extension and then conditionally renders an image or video

## Any videos should play automatically:

I used the React Player library (https://www.npmjs.com/package/react-player) for videos and set the playing prop to true to ensure videos played automatically.

