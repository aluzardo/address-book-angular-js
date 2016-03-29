'use strict';

describe('myApp.contacts module', function() {

  var $scope, contactsDataService;

  beforeEach(module('myApp.contacts', function($provide) {

    contactsDataService = jasmine.createSpyObj("contactsDataService", ["getContacts"]);

    contactsDataService.getContacts.and.returnValue([
      {
        id: 0,
        firstName: 'Adolfo',
        lastName: 'Luzardo Cabrera',
        country: '{"code":"ES","name":"Spain"}',
        emailAddress: 'adolfoluzardocabrera@gmail.com'
      },
      {
        id: 1,
        firstName: 'Dunia',
        lastName: 'Ojeda García',
        country: '{"code":"ES","name":"Spain"}',
        emailAddress: 'duniam_83@hotmail.com'
      }
    ]);

    $provide.value("contactsDataService", contactsDataService)

  }));

  describe('contacts controller', function(){

    it('should ....', inject(function($controller, $rootScope, contactsDataService) {
      $scope = $rootScope.$new();
      //spec body
      var contactsCtrl = $controller("ContactsCtrl", {
        $scope: $scope,
        ContactsDataService: contactsDataService
      });
      expect(contactsCtrl).toBeDefined();
    }));

  });
});