'use strict';

angular.module('myApp.services.contactsData', [])
    .factory('ContactsDataService', [ 'localStorageService',
        function (localStorageService) {

            var updateContactsInStore = function () {
                localStorageService.set('contacts', contacts);
            };

            var getContacts = function () {
                return contacts;
            };

            var resetContact = function () {
                return {
                    firstName: '',
                    lastName: '',
                    emailAddress: '',
                    country: ''
                };
            };

            var addContact = function (contact) {
                contact.id = contacts.length;
                contacts.push(contact);
                updateContactsInStore();
            };

            var editContact = function (contact) {
                for (var i = 0; i < contacts.length; i++) {
                    if (contacts[i].id == contact.id) {
                        contacts[i] = contact;
                        updateContactsInStore();
                    }
                }
            };

            var deleteContact = function (contact) {
                for (var i = 0; i < contacts.length; i++) {
                    if (contacts[i].id == contact.id) {
                        contacts.splice(i, 1);
                        updateContactsInStore();
                    }
                }
            };

            var getContact = function (id) {
                for (var i = 0; i < contacts.length; i++) {
                    if (contacts[i].id == id) {
                        return contacts[i];
                    }
                }
                return null;
            };


            var contacts = localStorageService.get('contacts') || [
                    {
                        id: 0,
                        firstName: 'Adolfo',
                        lastName: 'Luzardo Cabrera',
                        country: JSON.parse('{"code":"ES","name":"Spain"}'),
                        emailAddress: 'adolfoluzardocabrera@gmail.com'
                    },
                    {
                        id: 1,
                        firstName: 'Dunia',
                        lastName: 'Ojeda García',
                        country: JSON.parse('{"code":"ES","name":"Spain"}'),
                        emailAddress: 'duniam_83@hotmail.com'
                    }
                ];

            return {
                getContacts: getContacts,
                resetContact: resetContact,
                addContact: addContact,
                editContact: editContact,
                getContact: getContact,
                deleteContact: deleteContact
            };

        }
    ]);


