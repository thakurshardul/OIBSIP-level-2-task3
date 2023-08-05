document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
  
    addButton.addEventListener('click', () => {
      const taskText = newTaskInput.value.trim();
      if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
          <span>${taskText}</span>
          <button class="delete-button">Delete</button>
        `;
        taskList.appendChild(li);
        newTaskInput.value = '';
        setupDeleteButton(li);
      }
    });
  
    function setupDeleteButton(li) {
      const deleteButton = li.querySelector('.delete-button');
      deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
      });
    }
  });
  