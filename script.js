// Select Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add Event Listener for Form Submission
todoForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page refresh
    const task = todoInput.value.trim(); // Get the task and trim whitespace

    if (task) {
        addTask(task); // Add the task to the list
        saveTask(task); // Save task to local storage
        todoInput.value = ''; // Clear the input field
    }
});

// Add a Task to the List
function addTask(task) {
    const li = document.createElement('li');
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        li.remove(); // Remove task from the UI
        removeTask(task); // Remove task from local storage
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

// Save Task to Local Storage
function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task from Local Storage
function removeTask(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.filter((t) => t !== task);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

// Load Tasks from Local Storage on Page Load
document.addEventListener('DOMContentLoaded', () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(addTask);
});
