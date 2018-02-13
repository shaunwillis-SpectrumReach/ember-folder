import { moduleForModel, test } from 'ember-qunit';

moduleForModel('rn-hcentral', 'Unit | Model | rn hcentral', {
  // Specify the other units that are required for this test.
  needs: ['model:psid']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
