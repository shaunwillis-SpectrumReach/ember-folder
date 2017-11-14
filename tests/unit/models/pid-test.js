import { moduleForModel, test } from 'ember-qunit';

moduleForModel('pid', 'Unit | Model | pid', {
  // Specify the other units that are required for this test.
  needs: ['model:ae15m', 'model:ae1m']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
