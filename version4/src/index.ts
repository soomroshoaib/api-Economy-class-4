import { Todoitem } from "./TodoItem";

console.clear();

let item1:  Todoitem = new Todoitem(1,"mango",false);
let item2: Todoitem = new Todoitem(2, "eat baryani", false)

item1.printDetials();
item2.printDetials();