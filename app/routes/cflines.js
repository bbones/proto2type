import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log(this.get('store').query('cfline', {filter :{parent : null}}));
    return this.get('store').query('cfline', {filter :{parent : null}});
  }
});
