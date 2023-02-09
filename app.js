// Define UI Vars (create vars for elements needed) -- done
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');




// Load all event listeners
loadEventListeners();

// Load all event listeners (init all the functions) -- here 
function loadEventListeners(){
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);

    // next add filter task function
}

// Get Tasks from local storage
function getTasks() {
    
}

// Add task
function addTask(e) {
    if(taskInput.value === ''){
        alert('Add a task')
    }
   
    // Create li
    const li = document.createElement('li');
    // add class name
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link 
    const link = document.createElement('a');
    // add class
    link.className = 'delete-item secondary-content';
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append link to the li
    li.appendChild(link);
    // append li to the ul
    taskList.appendChild(li);
    // clear the input field 
    taskInput.value = '';

   e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task) {
    
}

// Remove Task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
    
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
   
}

// Clear Tasks
function clearTasks() {
    // taskList.innerHTML = '';

    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

   
}

// Clear Tasks from LS
function clearTasksFromLocalStorage(){
    
}

// Filter tasks
function filterTasks(e) {
    
}