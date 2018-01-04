import { moduleForModel, test } from 'ember-qunit';

moduleForModel('allaes', 'Unit | Model | allaes', {
  // Specify the other units that are required for this test.
  needs: ['model:pid']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
