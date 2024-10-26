let taskElement = document.getElementById("taskname");
let taskListElement = document.getElementById("tasklist");

let tasklist =JSON.parse( localStorage.getItem('tasklist')) || [];

if(tasklist.length > 0){
    for(let task of tasklist){
        displayTask(task);
    }
}

function addTask(){
  let newTask = {
    taskno: tasklist.length + 1,
    taskname: taskElement.value
  }

  tasklist.push(newTask);
  localStorage.setItem('tasklist',JSON.stringify(tasklist));
  displayTask(newTask);
  taskElement.value = "";
}




function displayTask(task){
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${task.taskno}</td>
    <td>${task.taskname}</td>
    <td><button onclick="deleteTask(event,${task.taskno})">Delete</button></td>
    `
    taskListElement.appendChild(tr);
}

function deleteTask(event,tno){
   let tasktoDelete = event.target.parentElement.parentElement;
   taskListElement.removeChild(tasktoDelete);
   tasklist.splice(tno-1,1);
   localStorage.setItem('tasklist',JSON.stringify(tasklist));
}