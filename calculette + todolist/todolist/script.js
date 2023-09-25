let taskInput = document.getElementById("taskInput");
let ul = document.getElementById("taskList");
let addTask = document.getElementById("addTask");

addTask.addEventListener("click", function(){
    maTache = taskInput.value;
    if (maTache !== ""){
        var li = document.createElement("li");
        li.textContent = maTache;
        ul.appendChild(li);
    }

    li.addEventListener("click", function(){
        li.classList.toggle('completed')
    })
    
    taskInput.value="";
})