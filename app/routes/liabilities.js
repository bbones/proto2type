import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      liabilities : this.store.findAll('liability', {include : 'enterprise'})
    });
  }
});
