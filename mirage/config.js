export default function() {
  this.get('/balance-strings', function() {
    return {
      data: [{
        type : 'balance-strings',
        id: 1,
        attributes: {
          name : "Assets",
          amount : 100,
          parent : null,
          subs : [{
            type : 'balance-strings',
            id: 4,
            attributes: {
              name : "Cash",
              amount : 100,
              parent : 1,
              subs : null
            }
          }]
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

      }]
    };
  });
}
