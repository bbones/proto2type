import { test } from 'qunit';
import moduleForAcceptance from 'proto2type/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | accounting');

test('visiting /accounting', function(assert) {
  visit('/accounting');

  andThen(function() {
    assert.equal(currentURL(), '/accounting');
  });
});
