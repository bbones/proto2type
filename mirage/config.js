export default function() {

  this.get('/cflines');

  this.get('/liabilities');

  this.delete('/liabilities/:id');

  this.get('/balance-lines');

  this.get('/users');

  this.get('/enterprises');

  this.get('/costcenters');
}
