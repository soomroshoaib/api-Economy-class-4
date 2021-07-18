// import { Todoitem } from "./TodoItem";

// console.clear();

// let item1:  Todoitem = new Todoitem(1,"mango",false);
// let item2: Todoitem = new Todoitem(2, "eat baryani", false)

// item1.printDetials();
// item2.printDetials();
import { Todoitem } from "./TodoItem";

import { itemcollection } from "./itemcollection";

console.clear();

let col1:itemcollection = new itemcollection();

col1.addTodo("shoaib soomr");
col1.addTodo("ahmed soomr")
col1.addTodo("noman ali soomro");
col1.taskdone(1);
col1.taskdone(2);
col1.taskdone(3);

col1.printDetials();