import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    printModel() {
      this.get('store').query('cfline', {filter :{id : 1}}).then(function(res) {
        console.log(res);
      });
    }
  }
});
