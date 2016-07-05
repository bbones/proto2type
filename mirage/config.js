export default function() {
  this.get('/balances', function() {
    return {
      data: [{
        active : 100,
        liabilities : 80,
        equity: 20
      }]
    };
  });
}
