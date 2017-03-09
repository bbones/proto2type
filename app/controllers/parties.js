import Ember from 'ember'
import { task, timeout } from 'ember-concurrency'

const DEBOUNCE_MS = 250

export default Ember.Controller.extend({
  searchRepo: task(function * (term) {
    if (Ember.isBlank(term)) { return [] }

    yield timeout(DEBOUNCE_MS)

    let json = yield this.get('store').query('party', {q: term})
    return json.slice(0, 10)
  }).restartable()
})
