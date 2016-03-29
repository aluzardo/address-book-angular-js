'use strict';

angular.module('myApp.contacts', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/contacts', {
            templateUrl: 'contacts/contacts.html',
            controller: 'ContactsCtrl'
        });
    }])

    .controller('ContactsCtrl', [
        '$scope', '$location', 'ContactsDataService',
        function ($scope, $location, contactsDataService) {

            $scope.contacts = contactsDataService.getContacts();

            $scope.editContact = function (id) {
                $location.path('/edit-contact/' + id);
            };

            $scope.showDetails = function (id) {
                var el = angular.element(document.getElementById('#ct-details-' + id));
                el.toggleClass('details-hidden');
            }
        }]);