import { moduleForModel, test } from 'ember-qunit';

moduleForModel('users', 'Unit | Model | users', {
  // Specify the other units that are required for this test.
  needs: ['model:post']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});