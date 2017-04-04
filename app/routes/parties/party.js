import Ember from 'ember'

export default Ember.Route.extend({
  model (params) {
    console.log('Params', params)
    return this.store.findRecord('party', params.party_id)
  }
})
