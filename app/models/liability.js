import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
    amount: attr('number'),
    party: belongsTo('party'),
    unit: belongsTo('party')
});
