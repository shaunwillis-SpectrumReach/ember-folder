import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('percent-symbol', 'Integration | Component | percent symbol', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{percent-symbol}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#percent-symbol}}
      template block text
    {{/percent-symbol}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
