import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      cflines : this.get('store').findAll('cfline')
    });
  }
});
