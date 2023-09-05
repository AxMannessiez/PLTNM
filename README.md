<p align="center">
  <img src='https://github.com/AxMannessiez/PLTNM/assets/74686075/561047a0-921e-4839-a39f-bad8a589ca59' alt="PLTNM's logo" width=300/>
</p>

<p align="center">
	<a href="https://pltnm.netlify.app/">https://pltnm.netlify.app/</a>
</p>
<br>

<div align="center">
  <img width="600" alt="Step 1 - PLTNM" src="https://github.com/AxMannessiez/PLTNM/assets/74686075/6461c699-78b4-4e25-94fc-ef292242e61f">
  <img width="200" alt="Step 1 - Mobile - PLTNM" src="https://github.com/AxMannessiez/PLTNM/assets/74686075/0b866654-80be-463b-9c24-423c5823c101">
</div>

<br>
PLTNM is a music game you can play with friends: you'll hear a song and have to guess which one of you has it in his playlist.

For that, the app allows you to choose and upload your best song playlist from the music service you use. 
Once everyone has uploaded theirs, it builds a selection of songs from you and your friends, especially those you have in common!

---



## Demo

https://github.com/AxMannessiez/PLTNM/assets/74686075/5ecb60b5-60ca-40a1-89d1-a1fe121f5a84

The project in its current state is accessible [here](https://pltnm.netlify.app/).
>⚠️ The Supabase back-end is on a free plan, meaning that it has chances to be **paused and unavailable** at the time you use it.


## Origin Story
Started as a project at UC Berkeley's [Cubstart: Introduction to Building Apps](https://www.cubstart.com/) course, my goal was to build my first React project, and try some new tools like Supabase and Chakra UI.

The idea for the app came from a game that I played with friends. As I needed to do it by hand (collect the players' playlists, regroup the songs, find matches, select some random songs, build a playlist and answer sheet), I thought it would be a great idea to automate it and allow more people to play!

## Technologies

Front-end:
- React
- Javascript
- [Chakra UI](https://github.com/chakra-ui/chakra-ui)

Back-end:
- [Supabase](https://github.com/supabase/supabase) (Database & Auth)
- Python / Flask _(future)_

APIs:
- Spotify
- Other streaming services _(future)_

## Current State
For the front-end:
- Spotify is the only available streaming service.
- Only last year's playlist is available.
- You get to see some album covers from your playlist.
- You can join / see a team that already exists if you enter a "share link".
- You cannot generate the game or play it.

For the back-end, nothing is built yet. The goal is to be able to fetch the playlists of the members of the team in the database, analyze them to highlight the songs that players have in common, and  mix them with random selections from every member's playlist.
The front-end will be able to use this "game playlist" to play song samples and display the answer (the names of the players that have it in their playlist).

## Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
