
const taskName = document.getElementById('taskName');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

loadTasks();

addTaskButton.addEventListener('click', addTask);

function addTask() {
  const task = taskName.value.trim();

  if (task) {
    createTaskElement(task);
    taskName.value = '';
    saveTasks();
  } else {
    alert('Please enter a task!');
  }
}

function createTaskElement(task) {
  const listItem = document.createElement('li');
  listItem.textContent = task;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'deleteTask';
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(listItem);
    saveTasks();
  });

  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.className = 'completeTask';
  completeButton.addEventListener('click', () => {
    listItem.classList.toggle('completed');
    saveTasks();
  });

  listItem.appendChild(completeButton);
  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);
}

function saveTasks() {
  let tasks = [];
  taskList.querySelectorAll('li').forEach((item) => {
    tasks.push({
      text: item.textContent.replace('Delete', '').replace('Complete', '').trim(),
      completed: item.classList.contains('completed'),
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach((task) => {
    createTaskElement(task.text);
    if (task.completed) {
      const lastItem = taskList.lastChild;
      lastItem.classList.add('completed');
    }
  });
}