# Library Status Dashboard
[![codecov](https://codecov.io/gh/sul-dlss/searchworks-status/branch/main/graph/badge.svg)](https://codecov.io/gh/sul-dlss/searchworks-status)

A lightweight dashboard for displaying the status and performance of SearchWorks and related SUL services.

## Run Locally
1. git clone this repository

### Live Updating Development Build (using HMR+React)
1. `npm install` (requires node.js 7+)
1. `npm start` (This will run the development server and reflect your changes to the page as you save files)
1. visit `localhost:8080` in your browser

### Static Build
1. `npm run build:dev` # For Development build
1. visit `dist/` using an http server

## Linting JavaScript
1. `npm run lint`

## Deploy to GH Pages
1. `./bin/publish.sh` from the project root - This will install dependencies, build the static assets, and edit and push to the gh-pages branch.
1. visit https://sul-dlss.github.io/library-status/

## Adding or Changing Checks and Graphs
The items to be displayed here are listed in [`config.js`](https://github.com/sul-dlss/library-status/blob/main/src/config.js)
