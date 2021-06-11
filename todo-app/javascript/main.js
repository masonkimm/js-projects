const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

const savedTodos = JSON.parse(localStorage.getItem('todos'));

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addTodo();
});

const addTodo = (todo) => {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todosLI = document.createElement('li');

    if (todo && todo.completed) {
      todosLI.classList.add('completed');
    }

    todosLI.innerText = todoText;
    todosLI.addEventListener('click', () => {
      todosLI.classList.toggle('completed');
      saveToLocalStorage();
    });

    todosLI.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      todosLI.remove();
      saveToLocalStorage();
    });

    todosUL.appendChild(todosLI);
    input.value = '';
    saveToLocalStorage();
  }
};

const saveToLocalStorage = () => {
  const todosEl = document.querySelectorAll('li');

  const todos = [];

  todosEl.forEach((noteEl) => {
    todos.push({
      text: noteEl.innerText,
      completed: noteEl.classList.contains('completed'),
    });
  });
  localStorage.setItem('todos', JSON.stringify(todos));
};

if (savedTodos) {
  savedTodos.forEach((todo) => {
    addTodo(todo);
  });
}
