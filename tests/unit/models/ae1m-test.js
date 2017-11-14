import { moduleForModel, test } from 'ember-qunit';

moduleForModel('ae1m', 'Unit | Model | ae1m', {
  // Specify the other units that are required for this test.
  needs: ['model:pid']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
