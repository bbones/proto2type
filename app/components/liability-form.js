import Ember from 'ember';

export default Ember.Component.extend({
  tagName : 'tr',
  actions: {
    editButtonPressed(liability) {
      console.log('Edit ', liability.id, liability.get('enterprise.name'));
      this.get('onEditButton')(liability);
    },
    deleteLiab(liability) {
      console.log('Delete ', liability.id, liability.get('enterprise.name'));
      liability.destroyRecord();
    }
  }
});
