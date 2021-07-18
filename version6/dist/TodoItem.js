"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todoitem = void 0;
class Todoitem {
    constructor(id, task, complete) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetials() {
        console.log(`${this.id} \t ${this.task} \t ${this.complete}`);
    }
}
exports.Todoitem = Todoitem;
