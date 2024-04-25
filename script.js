// Data in local storage
const sampleTodos = {
    "2024-04-1": [
      { title: "Task 1", done: false },
      { title: "Task 2", done: true }
    ],
    "2024-04-2": [
      { title: "Task 3", done: false }
    ]
  };


// Loads the todo list from local storate stored in a JSON like format
function loadTodosFromStorage() {
    // Check if todos exist in localStorage
    const storedTodos = localStorage.getItem("todos");
  
    if (storedTodos) {
      return JSON.parse(storedTodos); // Convert to JSON
    } else {
      return null;
    }
}
  
// Function to get tasks for a specific date given a date
function getTodosForDate(date) {
    const todos = loadTodosFromStorage();
    date = String(date) // convert date to a String
    return todos[date];
}
  
// Function to save todos to localStorage
function saveTodosToStorage(todos) {
    // Converting JSON to string to store into local storage
    localStorage.setItem("todos", JSON.stringify(todos));
}

  
// Function to create a todo list item
function createTodoListItem(todo, date) {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;

    // Add event listener to checkbox
    checkbox.addEventListener("change", function() {
        todo.done = checkbox.checked;
        const todos = loadTodosFromStorage();
        
        
        // Iterate over todo iterms for that day to check off
        console.log(todos)
        console.log(date)
        todos[date].forEach(todoItem => {
            if (todoItem.title === todo.title) {
                todoItem.done = checkbox.checked;
            }
        });

        console.log(todo)
        console.log(todos)

        saveTodosToStorage(todos);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode(todo.title));
    const taskList = document.querySelector(".task-list ul");
    taskList.appendChild(listItem);
}

// Function to handle click event on a day
function handleDayClick(day) {
    const date = `2024-04-${this.innerText.trim()}`;
  
    // Retrieve todos for date from localStorage
    const todos = getTodosForDate(date);
  
    const taskList = document.querySelector(".task-list ul"); // Select the task list element
    taskList.innerHTML = ""; // Clear taskList before populating it
    todos.forEach(todo => createTodoListItem(todo, date)); // add HTML to the element
}
  
// Function to add event listener to each day
function addEventListenerToDay(day) {
    day.addEventListener("click", handleDayClick); // day is a list item
}
  
document.addEventListener("DOMContentLoaded", function() {
    // Selecting all days, which are list items
    const days = document.querySelectorAll(".days li");
    // Adding event listener to each day
    days.forEach(day => addEventListenerToDay(day));

    saveTodosToStorage(sampleTodos);
});
  