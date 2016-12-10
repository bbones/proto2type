import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
    amount : attr('number'),
    party : belongsTo('enterprise', { inverse: null })
});
