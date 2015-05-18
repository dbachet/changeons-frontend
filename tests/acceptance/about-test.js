import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'changeons-frontend/tests/helpers/start-app';

var application;

module('Acceptance: About', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /about', function(assert) {
  visit('/about');

  andThen(function() {
    assert.equal(currentURL(), '/about');
    assert.equal(find("#about").length, 1);
  });
});
