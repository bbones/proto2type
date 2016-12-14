import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('liability-editor', 'Integration | Component | liability editor', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{liability-editor}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#liability-editor}}
      template block text
    {{/liability-editor}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
