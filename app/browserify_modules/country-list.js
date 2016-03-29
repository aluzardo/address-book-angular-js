var countries = require('country-list')();

var countriesArray = JSON.stringify(countries.getData());

localStorage.setItem("ls.countriesArray", countriesArray);
