class todoitem {
    title: string;

    constructor(title: string){
        this.title = title;
    }
}

var mytodo1 = new todoitem("go on Break & get some food)");
var mytodo2 = new todoitem("finish work)");
var mytodo3 = new todoitem("go home)");
let todolist : todoitem[] = [mytodo1, mytodo2, mytodo3]

for (var index in todolist){
    console.log(todolist[index]);
}


