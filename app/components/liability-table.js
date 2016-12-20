import Ember from 'ember';

export default Ember.Component.extend({
  isEditMode : false,
  actions : {
    editLiab(liability) {
      console.log('Edit liab', liability.id);
      this.set('isEditMode', true);
      this.set('liabForEdit', liability);
    }
  }
});
