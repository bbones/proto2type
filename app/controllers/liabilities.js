import Ember from 'ember';

export default Ember.Controller.extend({
  // this.isNewLiab = false;
  actions: {
    newLiability() {
      this.toggleProperty('isNewLiab');
    },
    editLiab(liability) {
      console.log('Edit liab', liability.id);
      this.set('isNewLiab', true);
      this.set('liabToEdit', liability);
    },
    deleteLiab(liability) {
      console.log(liability.id, liability.get('enterprise.name'));
      liability.destroyRecord();
    }

  }
});
