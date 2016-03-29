# address-book-angular-js — Address book AngularJS app

[![Build Status](https://travis-ci.org/aluzardo/address-book-angular-js.svg?branch=master)](https://travis-ci.org/aluzardo/address-book-angular-js)

This project is an address book application build on [AngularJS](http://angularjs.org/).

It is my first Angular JS app and it could contain some bad practices.


### Run the Application

I have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.


## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    services/              --> services components
       contactsData.js                 --> contactsData module declaration and basic get and set functions to manage contacts
       contactsData_test.js            --> contactsData service tests
    version/              --> version related components
      version.js                 --> version module declaration and basic "version" value service
      version_test.js            --> "version" value service tests
      version-directive.js       --> custom directive that returns the current app version
      version-directive_test.js  --> version directive tests
  contacts/                --> the contacts view template and logic
    contacts.html            --> the partial template
    contacts.js              --> the controller logic
    contacts_test.js         --> tests of the controller
  manageContact/                --> the manageContact (Create, Edit and Delete contacts) view template and logic
    manageContact.html            --> the partial template
    manageContact.js              --> the controller logic
    manageContact_test.js         --> tests of the controller
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
karma.conf.js         --> config file for running unit tests with Karma

```

## Testing

The address-book application is tested with few simple Unit tests.

### Running Unit Tests

The angular-seed app comes preconfigured with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma]. We provide a Karma
configuration file to run them.

* the configuration is found at `karma.conf.js`
* the unit tests are found next to the code they are testing and are named as `..._test.js`.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will sit and
watch the source and test files for changes and then re-run the tests whenever any of them change.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit.  This is useful if you want to
check that a particular version of the code is operating as expected.  The project contains a
predefined script to do this:

```
npm run test-single-run
```


## Continuous Integration

### Travis CI

[Travis CI][travis] is a continuous integration service, which can monitor GitHub for new commits
to your repository and execute scripts such as building the app or running tests. The angular-seed
project contains a Travis configuration file, `.travis.yml`, which will cause Travis to run your
tests when you push to GitHub.

You will need to enable the integration between Travis and GitHub. See the Travis website for more
instruction on how to do this.


## Contact

For more information on about this project please contact with me https://aluzardo.github.io/
Thanks for your feedback to improve my coding.
