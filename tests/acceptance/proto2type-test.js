import { test } from 'qunit';
import moduleForAcceptance from 'proto2type/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | proto2type');

test('visiting /about', function(assert) {
  visit('/about');

  andThen(function() {
    assert.equal(currentURL(), '/about');
  });
});

test('visiting /contact', function(assert) {
  visit('/contact');

  andThen(function() {
    assert.equal(currentURL(), '/contact');
  });
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('visiting /accounting', function(assert) {
  visit('/accounting');

  andThen(function() {
    assert.equal(currentURL(), '/accounting');
  });
});
