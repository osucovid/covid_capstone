Quick set up guide

This version is separated into client and server folders.

1. Clone repo with "git clone https://github.com/osucovid/covid_capstone.git"
2. -> Not needed at the moment, Vue will run clientside only now <- Within the server folder, install dependencies with 'run "npm i express cors mongodb nodemon body-parser"'
3. Within the client folder, install Vue with manual option.
  - Select: Babel, Router, CSS-Preprocessors, Linter / Formatter
  - Enable history mode
  - Select: Vue 2.x
  - Select: Sasss/SCSS (with dart-sass) 
  - Select: ESLint with error preventio only
  - Select: Lint and fix on commit
  - Select: In dedicated config files
4. 'npm install' in both client and server folders
5. (optional) start the server with 'npm start'
6. Install in the client folder: 
- Vue Formulate: npm install --save @braid/vue-formulate
- d3.js: npm install --save d3
7. Run Vue locally with, 'npm run serve' 

Remember to run 'npm run build' before pushing!

*bootstrap-vue should be installed too, apologies if the instructions cause errors...
