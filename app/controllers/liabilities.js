import Ember from 'ember';

export default Ember.Controller.extend({
  // this.isNewLiab = false;
  actions: {
    newLiability() {
      this.toggleProperty('isNewLiab');
    },
    deleteLiab(liability) {
      console.log(liability.id, liability.get('enterprise.name'));
      liability.destroyRecord();
    }

  }
});
