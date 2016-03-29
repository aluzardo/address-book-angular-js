'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'LocalStorageModule',
    'myApp.services.contactsData',
    'ui.bootstrap',
    'myApp.contacts',
    'myApp.manageContact',
    'myApp.version'
]).
    config(['$routeProvider', 'localStorageServiceProvider', function ($routeProvider, localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('ls');
        $routeProvider.otherwise({redirectTo: '/contacts'});
    }]);

