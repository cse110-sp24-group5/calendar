// Keep track of selected day
let selectedDate = null

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

    selectedDate = date;
  
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

// Function to handle click event on the "Add Task" button
function handleAddTaskButtonClick() {
    // Get the selected day
    const selectedDay = document.querySelector(".selected-day");
    
    // Check if a day is selected
    if (!selectedDay) {
        console.error("No day selected.");
        return;
    }
    
    // Get the date of the selected day
    const date = selectedDay.innerText.trim();

    // Get the task input value
    const taskInput = document.querySelector("#newTaskInput").value.trim();

    // Print the input and the corresponding day
    console.log("Task:", taskInput);
    console.log("Day:", date);
}

document.addEventListener("DOMContentLoaded", function() {
    // Selecting all days, which are list items
    const days = document.querySelectorAll(".days li");
    // Adding event listener to each day
    days.forEach(day => addEventListenerToDay(day));
    
    const addTaskButton = document.querySelector("#addTaskButton");
    addTaskButton.addEventListener("click", handleAddTaskButtonClick);

});

// Function to handle click event on the "Add Task" button or Enter key press
function handleAddTask(event) {
    // Check if the event is a click on the button or the Enter key press
    if (event.type === "click" || (event.type === "keydown" && event.key === "Enter")) {
        // Check if a day is selected
        if (!selectedDate) {
            alert("No date selected");
            return;
        }
        
        // Get the task input value
        const taskInput = document.querySelector("#newTaskInput").value.trim();

        // Check if task input is empty
        if (!taskInput) {
            alert("Task input is empty.");
            return;
        }

        // Retrieve existing todos from localStorage
        let todos = loadTodosFromStorage();

        // If there are no todos for the selected day, initialize an empty array
        if (!todos[selectedDate]) {
            todos[selectedDate] = [];
        }

        // Add the new task to the todos for the selected date
        todos[selectedDate].push({ title: taskInput, done: false });

        // Save updated todos to localStorage
        saveTodosToStorage(todos);

        // Clear the task input field
        document.querySelector("#newTaskInput").value = "";

        // Update the task list
        const taskList = document.querySelector(".task-list ul");
        taskList.innerHTML = ""; // Clear taskList before repopulating it
        todos[selectedDate].forEach(todo => createTodoListItem(todo, selectedDate));
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Selecting all days, which are list items
    const days = document.querySelectorAll(".days li");
    // Adding event listener to each day
    days.forEach(day => addEventListenerToDay(day));
    
    const addTaskButton = document.querySelector("#addTaskButton");
    addTaskButton.addEventListener("click", handleAddTask);

    // Adding event listener for Enter key press on the input field
    const taskInput = document.querySelector("#newTaskInput");
    taskInput.addEventListener("keydown", handleAddTask);
});