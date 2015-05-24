import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'changeons-frontend/tests/helpers/start-app';

var application;

module('Acceptance: LinksPagination', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('checking if links pagination is properly displayed', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/links-pagination');
  });
});
