export default function() {

  this.get('/cflines', function(db, request) {
    console.log('mirage->' + request);
    return {
      data : db.db.cflines.map(attrs => (
        { type: 'cflines', id: attrs.id, attributes: attrs }
      ))
    };
  });

  this.get('/balance-lines', function(db) {
    return {
      data : db.db.balanceLines.map(attrs => (
        { type: 'balance-lines', id: attrs.id, attributes: attrs }
      ))
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
