const NEW_TASK_BUTTON = document.getElementById('button-add-task');
const IMPUT_TEXT = document.getElementById('add-text');
const LIST = document.getElementById('container-list');
const CSS_CONTAINER_CHECKBOX = document.getElementsByClassName("container-task-checkbox");
const CSS_CHECKBOX = document.getElementsByClassName("checkbox");

NEW_TASK_BUTTON.addEventListener('click', addTask);

function addTask(e) {
    e.preventDefault()

    var imputContent = IMPUT_TEXT.value //.value tambien muestra el contenido//
    var addNewTask = document.createElement("li");
     
    var parraf = document.createElement("p");
    //var con = document.createTextNode(imputContent) ---> Funciona igual que lo que hice.
    parraf.innerHTML = imputContent;

    var newInput = document.createElement("input");
    newInput.type = "checkbox";
    newInput.classList.add("checkbox");

    addNewTask.appendChild(parraf);
    addNewTask.appendChild(newInput);

    LIST.appendChild(addNewTask);
}   

    
/* if(addNewTask.innerHTML = imputContent){
    for (var i = 0; i < CSS_CONTAINER_CHECKBOX; i++) {
        CSS_CONTAINER_CHECKBOX.classList.add("container-task-checkbox")
    }
}





/*for (var i = 0; i < CSS_CONTAINER_CHECKBOX; i++){
    CSS_CONTAINER_CHECKBOX.classList.add("container-task-checkbox")
}

for (var i = 0; i < CSS_CHECKBOX; i++){
    CSS_CHECKBOX.classList.add("checkbox")
}


//LIST.classList.toggle('container-task-checkbox');// Si lo pongo asi, asume que la clase esta puesta, y la pone y la saca como alas de pajaro.

//LIST.appendChild(addNewTask).style.backgroundColor = "green" . Si hago esto cambia la lista que agregue nueva a verde.









/* function deleteTask() {
    const list = [];
    for(let i = 0 ; i < LISTA.children.lenght ; i++)} */
