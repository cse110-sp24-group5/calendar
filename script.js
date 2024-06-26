// Keep track of selected day
let selectedDate = null

/**
 * Loads the todo list from local storage
 * @returns {Array | null} Array corresponding to "todos" key, null if key does not exist  
*/
function loadTodosFromStorage() {
    // Check if todos exist in localStorage
    const storedTodos = localStorage.getItem("todos");
  
    if (storedTodos) {
      return JSON.parse(storedTodos); // Convert to JSON
    } else {
      return null;
    }
}
  
/**
 * Get todos for a specific date from local storage
 * @param {string} date - date with format yyyy-mm-dd
 * @returns {Array} - list of todos for date
*/
function getTodosForDate(date) {
    const todos = loadTodosFromStorage();
    date = String(date) // convert date to a String
    return todos[date];
}
  
/**
 * Save todos to localStorage
* @param {json} todos - the json of the todos on the list for a given day
*/
function saveTodosToStorage(todos) {
    // Converting JSON to string to store into local storage
    localStorage.setItem("todos", JSON.stringify(todos));
}

  
/**
 * Create a todo list item
 * @param {json} todos - the json of the todos on the list for a given day
 * @param {string} date - the date on the calendar
*/
function createTodoListItem(todo, date) {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    const button = document.createElement("button");
    const hrline = document.createElement("hr");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;

    // give each button a date and title attribute so that it can be matched up with its respective task (Credit to ChatGPT)
    button.setAttribute("date", date);
    button.setAttribute("title", todo.title);

    // Add a class to the delete button so that it can be styled (credit to ChatGPT)
    button.classList.add("deleteButton");

    // Styling for elements not in the html file
    button.textContent = "Remove";
    button.style.marginLeft = "270px";
    button.style.fontSize = "x-small";
    button.style.backgroundColor = "#eb6e8b";
    button.style.color = "white";
    button.style.fontWeight = "bold";
    hrline.style.width = "80%";
    hrline.style.borderColor = "white";

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

    // task deletion button credit of our backend team's brainpower and a lot of ChatGPT's processing power
    // Add event listener to button such that when the button is pressed, its respective task is deleted
    button.addEventListener("click", function() {
        const todos = loadTodosFromStorage();
        const date = this.getAttribute("date");
        const title = this.getAttribute("title");

        // Check if todos for the date exist
        if(todos[date]) {
            // Use filter to remove the task with the given title
            todos[date] = todos[date].filter(todoItem => todoItem.title !== title);

            saveTodosToStorage(todos);

            // Refresh the task list
            // !!!!! ALERT !!!!! not quite sure what the below does ... 
            const taskList = document.querySelector(".task-list ul");
            taskList.innerHTML = ""; // Clear taskList before repopulating it
            todos[date].forEach(todo => createTodoListItem(todo, date));
        }
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode(todo.title));
    listItem.appendChild(button);
    listItem.appendChild(hrline);
    const taskList = document.querySelector(".task-list ul");
    taskList.appendChild(listItem);
}

/**
 * Handle click event on a day
 * @param {EventObject} event - depending on what type of event, a task will be added or removed
*/
function handleDayClick(event) {
    if (event.type === "click" || (event.type === "keydown" && event.key === "Enter")) {
        // Remove focus from previously selected date, if any
        const previouslySelectedDay = document.querySelector('.days li.focused');
        if (previouslySelectedDay) {
            previouslySelectedDay.classList.remove('focused');
        }
        // Add focused class to the clicked date
        this.classList.add('focused');

        const date = `2024-04-${this.innerText.trim()}`;

        selectedDate = date;
    
        // Retrieve todos for date from localStorage
        const todos = getTodosForDate(date);
    
        const taskList = document.querySelector(".task-list ul"); // Select the task list element
        taskList.innerHTML = ""; // Clear taskList before populating it
        
        if (todos) todos.forEach(todo => createTodoListItem(todo, date)); // add HTML to the element
    }
}
    
/** 
 * Add event listener to each day
 * @param {ListItem} day - specific day that you can click on
*/
function addEventListenerToDay(day) {
    day.addEventListener("click", handleDayClick); // day is a list item
    day.addEventListener("keydown", handleDayClick); // so we can tab+enter dates
}

/**
 * Handle click event on the "Add Task" button or Enter key press
 * @param {EventObject} event - depending on event, task is added
*/
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

        // Check if the task input matches any existing task title for the selected date
        // Array.some() is similar to iterating the array but it stops when the argument is true
        const taskExists = todos[selectedDate].some(todo => todo.title === taskInput);

        if (taskExists) {
            alert("Task already exists for this date.");
            return;
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
/** 
 * Executes the events when the DOM tree is completely loaded
 * @param {event} DOMContentLoaded - event listeners for interacting with the tasks and todos are set up once the DOM tree is loaded
*/
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

    if (localStorage.getItem("todos") == null) saveTodosToStorage({})
});
