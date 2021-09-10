let taskInput =document.getElementById('taskInput');
let addBtn = document.getElementById('addBtn');
let tasks = document.getElementById('tasks');
let noTasks = document.getElementById('noTasks');
const btn1 = document.querySelector('span');
const btn2 = document.querySelector('button');
const div = document.querySelector('div');


btn2.onclick = function(){
    if(div.classList.contains('dark')){
        div.classList.toggle('dark');
        btn2.classList = "btn btn-dark btn-block btn2";
        btn2.innerText = "Dark Mood";
    }else{
        div.classList.add('dark');
        btn2.classList = "btn btn-light btn-block btn2";
        btn2.innerText = "Light Mood";
    }
}
let noTasksShow = ()=>{
    if(tasks.childElementCount == 0){
        noTasks.classList.remove('none');
    }
}

let addTask = ()=>{
    let taskData = taskInput.value;
   if(taskData.trim() == "" ){
       alert('please enter valid value');
   }
   else{
    noTasks.classList.add('none');
     tasks.innerHTML += `
    <div class= " alert alert-info task " style ="height:70px ">
        ${taskData}
        <button class ="btn btn-danger  delete" style ="float:right "> delete </button>
    </div>
     `
     taskInput.value = "";
     tasks.addEventListener('click',function(e){
         if(e.target.classList.contains('task')){
             e.target.classList.toggle('check');
         }
     })
     
   }
}

addBtn.addEventListener('click' ,addTask );

document.addEventListener('click' , function (e){
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
        noTasksShow();
    }   
});

