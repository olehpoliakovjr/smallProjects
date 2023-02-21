window.addEventListener("load", function() {
    const form = document.querySelector("#new-task-from");
    const input = document.querySelector("#new-task-input");
    const taskList = document.querySelector(".tasks");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const task = input.value;

            if (!task) {
                alert("Please add your task into the field")
                return;
            }

        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        const taskElementContent = document.createElement("div");
        taskElementContent.classList.add("content");

        taskElement.appendChild(taskElementContent);

        const taskInputElement = document.createElement("input");
        taskInputElement.classList.add("text");
        taskInputElement.type = "text";
        taskInputElement.value = task; // input.value
        taskInputElement.setAttribute("readonly", "readonly");

        taskElementContent.appendChild(taskInputElement);

        const taskActions = document.createElement("div");
        taskActions.classList.add("actions");

        const taskEditElement = document.createElement("button");
        taskEditElement.classList.add("edit");
        taskEditElement.innerHTML = "Edit";
        taskActions.appendChild(taskEditElement);

        const taskDeleteElement = document.createElement("button");
        taskDeleteElement.classList.add("remove");
        taskDeleteElement.innerHTML = "Delete";
        taskActions.appendChild(taskDeleteElement);
        
        taskElement.appendChild(taskActions);

        taskList.appendChild(taskElement);

        input.value = ``;


        taskEditElement.addEventListener("click", editElement);

        taskDeleteElement.addEventListener("click", removeElement);


        function removeElement(){
            taskList.removeChild(taskElement);
        }
        
        function editElement(){
            if(taskEditElement.innerText.toLowerCase() == "edit"){
                taskInputElement.removeAttribute("readonly");
                taskInputElement.focus();
                taskEditElement.innerText = "Save";
            } else {
                taskInputElement.setAttribute("readonly", "readonly");
                taskEditElement.innerText = "Edit";
            }
        }
    });
});