import Ember from 'ember'

export default Ember.Controller.extend({
  actions: {
    submit: function () {
      console.log('submit', this.model.get('id'))
      this.model.save()
    },
    delete: function () {
      console.log('delete', this.model.get('id'))
      this.model.destroyRecord()
    }

  }
})
