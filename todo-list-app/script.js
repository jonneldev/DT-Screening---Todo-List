const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

function addTask(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <span class="delete-btn">❌</span>
    `;
    taskList.appendChild(li);
}

function handleAddTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
        taskInput.focus();
    }
}

addButton.addEventListener('click', handleAddTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleAddTask();
    }
});

taskList.addEventListener('click', (e) => {
    const target = e.target;
    
    if (target.classList.contains('delete-btn')) {
        target.parentElement.remove();
        return;
    }
    
    if (target.tagName === 'SPAN' && target.parentElement.tagName === 'LI') {
        target.parentElement.classList.toggle('completed');
    } else if (target.tagName === 'LI') {
        target.classList.toggle('completed');
    }
});