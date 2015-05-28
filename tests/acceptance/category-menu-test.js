import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'changeons-frontend/tests/helpers/start-app';

var application;

module('Acceptance: CategoryMenu', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

// IN "header" ELEMENT

test('Check if category menu is in header', function(assert) {
  visit('/');

  andThen(function() {
    var headerCategoryMenu = find("header .category-menu");
    assert.equal(headerCategoryMenu.length, 1);
  });
});

test('Check if category menu expands when clicking on category menu link and closes when we click wherever except on the category menu link', function(assert) {
  visit('/');

  andThen(function() {
    var expandedMenu = find("header .category-menu .expanded");
    assert.equal(expandedMenu.length, 0);
  });

  click("header .category-menu .not-expanded a");

  andThen(function() {
    var expandedMenu = find("header .category-menu .expanded");
    assert.equal(expandedMenu.length, 1);
  });

  click("#shares");

  andThen(function() {
    var expandedMenu = find("header .category-menu .expanded");
    assert.equal(expandedMenu.length, 0);
  });
});

// IN ".fixed-top-bar" ELEMENT

test('Check if category menu is in fixed top bar', function(assert) {
  visit('/');

  andThen(function() {
    var topBarCategoryMenu = find(".fixed-top-bar .category-menu");
    assert.equal(topBarCategoryMenu.length, 1);
  });
});

test('Check if category menu expands when clicking on category menu link and closes when we click wherever except on the category menu link', function(assert) {
  visit('/');

  andThen(function() {
    var expandedMenu = find(".fixed-top-bar .category-menu .expanded");
    assert.equal(expandedMenu.length, 0);
  });

  click(".fixed-top-bar .category-menu .not-expanded a");

  andThen(function() {
    var expandedMenu = find(".fixed-top-bar .category-menu .expanded");
    assert.equal(expandedMenu.length, 1);
  });

  click("#shares");

  andThen(function() {
    var expandedMenu = find(".fixed-top-bar .category-menu .expanded");
    assert.equal(expandedMenu.length, 0);
  });
});