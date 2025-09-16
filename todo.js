function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.textContent = taskText;

  // Mark as completed on click
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function (e) {
    e.stopPropagation();
     // So it doesn't toggle completed
    taskList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}