export default function() {
  this.get('/balances', function() {
    return {
      data: [{
        type : 'balances',
        id: 1,
        attrbutes: {
          active : 100,
          liabilities : 80,
          equity: 20
        }
      }]
    };
  });
}
