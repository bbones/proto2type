import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit: () => {
      console.log('submit', model)
      // this.get('store').push(model)
    }
  }
})
