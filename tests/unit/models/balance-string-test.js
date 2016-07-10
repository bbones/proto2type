import { moduleForModel, test } from 'ember-qunit';

moduleForModel('balance-string', 'Unit | Model | balance string', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
