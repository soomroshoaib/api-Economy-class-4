export class Todoitem{
    

    public constructor(public id:number, public task:string, public complete:Boolean){
        
    }

     printDetials(){
        console.log(`${this.id} \t ${this.task} \t ${this.complete}`)
    }
}