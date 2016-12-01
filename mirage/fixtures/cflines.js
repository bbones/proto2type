export default [
  {id: 1, name : "income", parentId : null, subs : [3,4]},
  {id: 3, name : "operational income", parentId : 1, subs : [5,6]},
  {id: 5, name : "steel sells", parentId : 3},
  {id: 6, name : "other sells", parentId : 3},
  {id: 4, name : "financial income", parentId : 1},
  {id: 2, name : "outcome", parentId : null, subs : [7,8]},
  {id: 7, name : "row materials spending", parentId : 2},
  {id: 8, name : "equipment spending", parentId : 2}

];
