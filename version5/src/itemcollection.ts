import {Todoitem} from './TodoItem'

export class itemcollection{
    private nextId:  number = 1;
    public constructor(public items: Todoitem[]=[]){

        
    }

    public addTodo(task:string):void{
        let item:Todoitem  = new Todoitem(this.nextId, task, false)
        this.nextId ++;
        this.items.push(item)

    }
    public printDetials():void{
        this.items.forEach((item:Todoitem)=>item.printDetials())
    }
}