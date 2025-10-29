var taskList = [];
/*
Celine:
Add tasks to a list once the "add task" button is pressed
Save tasks to localStorage (happens by a callback once Fatemeh function 1 is finished)
Load tasks from localStorage (happens on page being opened)
Fatemeh:
Sort the tasks in the tasklist when "add task" is pressed (via a function called inside Celine function 1)
show tasks on screen by making copies of a task element (happens after Fatemeh function 1)
*/


class Task {
    constructor(name, due_date, duration, priority, desc, color){
        // types: string, string DD-MM-YYYY, int, int, string, string in hex format #XXXXXX
    }
}




function onAddTask(){
    alert("exscript");
    //take data and add an object to taskList
    var name = document.getElementById("task_title").value;
    var due_date = document.getElementById("due_date").value;
    var duration = document.getElementById("time").value;
    var priority = document.getElementById("priority_select").value;
    var desc = document.getElementById("task_desc").value;
    var color = document.getElementById("color").value;
    alert("exscript");
    alert([name, due_date, duration, priority, desc, color]);
    sortTaskList();
}

function sortTaskList(){
    //sort tasks in list
    saveTaskList()
    showTasks()
}

function loadTaskList(){


    
}



function saveTaskList(){ // fatemeh

}



function showTasks(){ //fatemeh
    for(task in taskList){
        
    } 
}

loadTaskList();
sortTaskList();