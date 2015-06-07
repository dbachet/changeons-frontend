import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'changeons-frontend/tests/helpers/start-app';

var application;

module('Acceptance: SharesPagination', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('checking if shares pagination is properly displayed', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find(".pagination-bar").length, 2);
  });
});
