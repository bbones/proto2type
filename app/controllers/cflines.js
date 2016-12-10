import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    printModel() {
      this.get('store').query('cfline', {parent_id : null}).then(function(res) {
        console.log(res);
      });
    }
  }
});
