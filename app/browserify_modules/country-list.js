// This file is only to generate country-list-bundle.js using browserify app/browserify_modules/country-list.js -o app/browserify_modules/country-list-bundle.js

var countries = require('country-list')();

var countriesArray = JSON.stringify(countries.getData());

localStorage.setItem("ls.countriesArray", countriesArray);
