Quick set up guide

This version is separated into client and server folders.

1. Clone repo with "git clone https://github.com/osucovid/covid_capstone.git"
2. Vue runs client-side only. For the back end, install dependencies with 'run "npm i express cors mongodb nodemon body-parser"' in the server folder.
3. Within the client folder, install Vue with manual option.
  - Select: Babel, Router, CSS-Preprocessors, Linter / Formatter
  - Enable history mode
  - Select: Vue 2.x
  - Select: Sasss/SCSS (with dart-sass) 
  - Select: ESLint with error prevention only
  - Select: Lint and fix on commit
  - Select: In dedicated config files
4. 'npm install' in both client and server folders
5. Start the server with 'npm start' in server folder
6. Install in the client folder: 
- Vue Formulate: npm install --save @braid/vue-formulate
- d3.js: npm install --save d3
- leaflet: npm install leaflet vue2-leaflet --save AND npm install @types/leaflet
- vue-share-it: npm install vue-share-it --save
- bootstra-vue: npm install bootstra-vue --save
7. Install in the root folder:
- Mongoose: npm install mongoose
8. Run Vue locally with, 'npm run serve' in the client folder. 

Remember to run 'npm run build' before pushing!


