import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return [
    //     {id : 1, name : "Assets", amount : 100, subs : [
    //         {id : 4, name : "Cash", amount : 100},
    //       ]
    //     },
    //     {id : 2, name : "Equity", amount : 20},
    //     {id : 3, name : "Liabilities", amount : 80}
    //   ];
    // return this.get('store').findAll('balance-string');
    var res = this.get('store').query('balance-string',
        { filter: { id: 2 } });
    console.log(res);
    return res;
  } // model
});
