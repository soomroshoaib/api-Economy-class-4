"use strict";
// import { Todoitem } from "./TodoItem";
Object.defineProperty(exports, "__esModule", { value: true });
const itemcollection_1 = require("./itemcollection");
console.clear();
let col1 = new itemcollection_1.itemcollection();
col1.addTodo("shoaib soomr");
col1.addTodo("ahmed soomr");
col1.addTodo("noman ali soomro");
col1.printDetials();
