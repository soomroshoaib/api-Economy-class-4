"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemcollection = void 0;
const TodoItem_1 = require("./TodoItem");
class itemcollection {
    constructor(items = []) {
        this.items = items;
        this.nextId = 1;
    }
    addTodo(task) {
        let item = new TodoItem_1.Todoitem(this.nextId, task, false);
        this.nextId++;
        this.items.push(item);
    }
    printDetials() {
        this.items.forEach((item) => item.printDetials());
    }
}
exports.itemcollection = itemcollection;
