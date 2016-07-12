import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name : attr('String'),
  amount : attr('number'),
  subs : hasMany('balance-string', { inverse: 'parent' }),
  parent : belongsTo('balance-string', { inverse: 'subs' })
});
