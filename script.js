// Open popup
document.getElementById("open-popup").addEventListener("click", function () {
    document.getElementById("popup").style.display = "block";
  });
  
  // Close popup
  document.getElementById("close-popup").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
  });
  
  
  //Function todos
  document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodo');
    const todoList = document.getElementById('todoList');
  
    // Check if there are todos in local storage
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
  
    // Function to render todos
    function renderTodos() {
      todoList.innerHTML = '';
      todos.forEach((todo, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = todo;
        listItem.dataset.index = index;
        todoList.appendChild(listItem);
  
        // Add click event listener to remove todo
        listItem.addEventListener('click', function () {
          todos.splice(index, 1);
          localStorage.setItem('todos', JSON.stringify(todos));
          renderTodos();
        });
      });
    }
  
    // Initial render
    renderTodos();
  
    // Event listener for adding todos
    addTodoBtn.addEventListener('click', function () {
      const newTodo = todoInput.value.trim();
      if (newTodo !== '') {
        todos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
        todoInput.value = '';
      }
    });
  });
  