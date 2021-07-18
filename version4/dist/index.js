"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = require("./TodoItem");
console.clear();
let item1 = new TodoItem_1.Todoitem(1, "mango", false);
let item2 = new TodoItem_1.Todoitem(2, "eat baryani", false);
item1.printDetials();
item2.printDetials();
