import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'changeons-frontend/tests/helpers/start-app';

var application;

module('Acceptance: CreditsPage', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /credits', function(assert) {
  visit('/credits');

  andThen(function() {
    assert.equal(currentURL(), '/credits');
  });
});
