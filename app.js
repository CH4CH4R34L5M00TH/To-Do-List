// Selecting DOM elements
const taskList = document.querySelector('#task-list');
const inputTask = document.querySelector('#input-task');
const addBtn = document.querySelector('#add-btn');

// Add task
addBtn.addEventListener('click', () => {
  const taskText = inputTask.value.trim();

  if (taskText) {
    const newTask = createTaskElement(taskText);
    taskList.appendChild(newTask);
    inputTask.value = '';
  }
});

// Mark task as completed
taskList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
  }
});

// Delete task
taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    event.target.parentElement.remove();
  }
});

// Function to create new task element
function createTaskElement(taskText) {
  const li = document.createElement('li');
  const taskContent = document.createElement('span');
  const deleteBtn = document.createElement('button');

  taskContent.innerText = taskText;
  deleteBtn.innerText = 'X';
  deleteBtn.classList.add('delete-btn');

  li.appendChild(taskContent);
  li.appendChild(deleteBtn);

  return li;
}
