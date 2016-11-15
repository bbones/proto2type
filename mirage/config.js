export default function() {
  this.get('/balance-strings', function() {
    return {
      data: [{
        type : 'balance-strings',
        id: 1,
        attributes: { name : "Assets", amount : 100 },
        relationships: {
          subs: {
            data : [{type : 'balance-strings',id: 4}]
          }
        }
      }, {
        type : 'balance-strings',
        id: 2,
        attributes: {
          name : "Liabilities",
          amount : 80
        }

      }, {
        type : 'balance-strings',
        id: 3,
        attributes: {
          name : "Equity",
          amount : 20
        }

      }, {
          type : 'balance-strings',
          id: 4,
          attributes: {
            name : "Cash",
            amount : 100
          },
          relationships: {
            parent: {
              data : {type : 'balance-strings',id: 1}
            }
          }

        }]
    };
  });
  this.get('/users', function(db){
    // console.log(db.db.users);
    return {
      data : db.db.users.map(attrs => (
        { type: 'users', id: attrs.id, attributes: attrs }
      ))
    };
  });

  this.get('/enterprises', function(db){
    return {
      data : db.db.enterprises.map(attrs => (
        { type: 'enterprise', id: attrs.id, attributes: attrs }
      ))
    };
  });

  this.get('/costcenters', function() {
    return {
      data : [
        {name : 'DMKD'},
        {name : 'AMK'},
        {name : 'ISD'},
        {name : 'HC'},
        {name : 'DUNAFER'}]
    };
  });
}
