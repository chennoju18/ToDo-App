// Elements
const form = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved dark mode preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
}

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Handle task form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('taskTitle').value;
    const category = document.getElementById('taskCategory').value;

    // Create a new task element
    const taskItem = document.createElement('li');
    taskItem.textContent = `${title} - ${category}`;

    // Add a delete button to the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskItem.remove();
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    // Clear the form
    form.reset();
});
