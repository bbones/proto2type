import Ember from 'ember'

export default Ember.Route.extend({
  model (params) {
    console.log('Params', params)
    return this.store.findRecord('party', params.party_id)
  },
  actions: {
    submit: function () {
      console.log('submit')
      this.get('controller').get('model').save()
    },
    delete: function () {
      console.log('delete')
      this.get('controller').get('model').destroyRecord()
    }
  }
})
