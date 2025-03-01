document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" class="task-checkbox">
            <span class="task-text">${taskText}</span>
            <button class="edit-btn">Edit</button>
            <button class="remove-btn">Remove</button>
        `;

        taskList.appendChild(li);
        taskInput.value = "";
    }

    // Event listener for adding tasks
    addTaskBtn.addEventListener("click", addTask);

    // Event delegation for editing, removing, and marking tasks
    taskList.addEventListener("click", (e) => {
        const target = e.target;
        const taskItem = target.closest("li");

        if (target.classList.contains("edit-btn")) {
            const taskText = taskItem.querySelector(".task-text").textContent;
            const newTaskText = prompt("Edit task:", taskText);
            if (newTaskText) {
                taskItem.querySelector(".task-text").textContent = newTaskText;
            }
        }

        if (target.classList.contains("remove-btn")) {
            taskItem.remove();
        }

        if (target.classList.contains("task-checkbox")) {
            taskItem.querySelector(".task-text").classList.toggle("completed", target.checked);
        }
    });
});
