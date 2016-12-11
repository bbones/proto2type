import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    printModel() {
      console.log(this.get('store').findAll('liability'));
    }
  }
});
