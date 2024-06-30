var myBtn = document.querySelector('button');
var myArea = document.getElementById('tasks');

myBtn.addEventListener('click',function(){
    
    var myText = document.getElementById('taskInput').value;
    if(myText.trim()==''){
        alert("You should enter a task");
        return;
    }
    //console.log(myText.value);
    var myLi = document.createElement('li');
    var myCheckbox = document.createElement('input');
    myCheckbox.setAttribute('type','checkbox');

    var taskText = document.createElement('span');
    taskText.textContent = myText;

    myLi.appendChild(myCheckbox);
    myLi.appendChild(taskText);

    myArea.appendChild(myLi);
    var newBtn = document.createElement('button');
    newBtn.innerHTML="remove";
    newBtn.setAttribute('class','remove-btn');
    myCheckbox.addEventListener('change',function(){
        if(myCheckbox.checked){
          //  alert("Congratulations!")
            taskText.style.textDecoration='line-through';
            myLi.appendChild(newBtn);
        }
        else {
            myLi.removeChild(newBtn);
            taskText.style.textDecoration='none';
        }
    });
    newBtn.addEventListener('click',function(){
        myArea.removeChild(myLi);
    });
    document.getElementById('taskInput').value="";

   
});




