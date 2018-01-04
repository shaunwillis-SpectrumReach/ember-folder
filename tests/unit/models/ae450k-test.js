import { moduleForModel, test } from 'ember-qunit';

moduleForModel('ae450k', 'Unit | Model | ae450k', {
  // Specify the other units that are required for this test.
  needs: ['model:pid']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
