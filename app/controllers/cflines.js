import CTABLE from 'ember-cli-crudtable/mixins/crud-controller';
import Ember from 'ember';

let CrudTable = CTABLE('cfline');
export default Ember.Controller.extend(CrudTable, {
  fieldDefinition:{
        id:{Label:'Id'},
        name:{
            Label:'Name',
            Type:'text',
            Search: true
        }
    }
});
