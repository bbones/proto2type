export default [
  {id: 1, name : "income", parent_id : null, subs : [3,4]},
  {id: 3, name : "operational income", parent_id : 1, subs : [5,6]},
  {id: 5, name : "steel sells", parent_id : 3},
  {id: 6, name : "other sells", parent_id : 3},
  {id: 4, name : "financial income", parent_id : 1},
  {id: 2, name : "outcome", parent_idId : null, subs : [7,8]},
  {id: 7, name : "row materials spending", parent_id : 2},
  {id: 8, name : "equipment spending", parent_id : 2}

];
