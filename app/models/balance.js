import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  active: attr('number'),
  liabilities: attr('number'),
  equity: attr('number')
});
