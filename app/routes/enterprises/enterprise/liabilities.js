import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let enterprise = this.modelFor('enterprises.enterprise');
    console.log('Model', enterprise.id);
    return this.store.query('liability', {'enterpriseId' : enterprise.id});
  }
});
