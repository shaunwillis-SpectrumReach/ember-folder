import { moduleForModel, test } from 'ember-qunit';

moduleForModel('eliteae700k', 'Unit | Model | eliteae700k', {
  // Specify the other units that are required for this test.
  needs: ['model:pid']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
