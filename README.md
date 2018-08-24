# SearchWorks Status Dashboard
This dashboard provides a lightweight way to display the status and performance of SearchWorks and related SUL services.

## Run Locally
1. git clone this repository
1. `npm install` (requires node.js 7+)
1. `npm start` (This will run the development server and reflect your changes to the page as you save files)
1. visit `localhost:8080` in your browser

### Static Build
1. `npm run build`
1. visit `dist/` using an http server

### Deploy to GH Pages
1. `./bin/publish.sh` from the project root - This will install dependencies, build the static assets, and edit and push to the gh-pages branch.
1. visit https://sul-dlss.github.io/searchworks-status/
