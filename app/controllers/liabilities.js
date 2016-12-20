import Ember from 'ember';

export default Ember.Controller.extend({
  // this.isNewLiab = false;
  actions: {
    newLiability() {
      this.toggleProperty('isNewLiab');
    }
  }
});
