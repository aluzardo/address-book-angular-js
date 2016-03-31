'use strict';

describe('myApp.services.contactsData module', function () {
  // Load your module.
  beforeEach(module('myApp.services.contactsData'));

  // Setup the mock service in an anonymous module.
  var localStorageService;
  beforeEach(module(function ($provide) {

    localStorageService = jasmine.createSpyObj("localStorageService", ["get"]);

    localStorageService.get.and.returnValue([
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
    ]);

    $provide.value("localStorageService", localStorageService);
  }));

  it('can get an instance of my service', inject(function(ContactsDataService) {
    expect(ContactsDataService).toBeDefined();
  }));
});
