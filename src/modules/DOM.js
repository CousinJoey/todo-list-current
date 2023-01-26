import { createProject, projectStorage } from "./project";
import { createTask, taskStorage } from "./task";


function listeners() {

    let selectedTitle, selectedArray;

    document.addEventListener("click", (e) => {
    
        if (e.target.matches(".add-project")) {
            projectPopUp();
        }
    
        if (e.target.matches("#cancel")) {
            const projectToggle = document.querySelector("#create-project-container");
            projectToggle.style.display = "none";
        }
    
        if (e.target.matches("#add")) {
            appendProjects();
            createProject();

            document.getElementById("project-form").reset();

            const projectToggle = document.querySelector("#create-project-container");
            projectToggle.style.display = "none";
        }

        if (e.target.matches(".project-item")) {
            const currentProject = ((projectStorage.projectArray.find(item => item.title === e.target.id)));
            renderProjectScreen(currentProject.title, currentProject.array);
            selectedTitle = currentProject.title;
            selectedArray = sortArray(currentProject.array);
        }

        if (e.target.matches(".todo-button") || e.target.matches(".fa-plus")) {
            const todoToggle = document.querySelector("#create-todo-item");
            todoToggle.style.display = "block";
        }

        if (e.target.matches("#create")) {

            if (!document.getElementById("priority-select").value 
                || !document.getElementById("date").value 
                || !document.getElementById("title").value) {
                alert("Please fillout all form prompts")
            } else {

                selectedArray.push(createTask(selectedTitle));
                sortArray(selectedArray);
                renderProjectTask(selectedArray);

                const todoToggle = document.querySelector("#create-todo-item");
                todoToggle.style.display = "none";
                document.getElementById("create-form").reset();

            }
        }

        if (e.target.matches("#cancel-task")) {
            const todoToggle = document.querySelector("#create-todo-item");
            todoToggle.style.display = "none";
        }

        if (e.target.matches("#today-container")) {
            const title = "Today";
            renderByDateScreen(title, sortArray(taskStorage.todayArray));
        }

        if (e.target.matches("#home-container")) {
            const title = "Home";
            renderByDateScreen(title, sortArray(taskStorage.taskArray));
        }

        if (e.target.matches("#week-container")) {
            const title = "This Week";
            renderByDateScreen(title, sortArray(taskStorage.weekArray));
        }

        if (e.target.matches(".fa-trash-can")) {
            deleteTask(e);
        }

        if (e.target.matches(".fa-xmark")) {
            if (confirm("Press OK to continue")) {
                deleteProject(e);
              } else {
                return;
              }
        }

        if (e.target.matches(".fa-square-check")) {
            e.target.classList.add("rotate");
            e.target.style.color = "green";
            setTimeout( function() { deleteTask(e); }, 600);
        }

    })

}

function projectPopUp() {
    const createProjectBtn = document.getElementById("create-project-container");
    createProjectBtn.style.display = "block";
};


function appendProjects() {

    const projectTitle = document.getElementById("project-input").value;

    if (projectTitle === "") {
        alert("Project titles can not be blank")
        return
    } else {

        const projectLists = document.querySelector("#list");

        const projectItemContainer = document.createElement("div");
        projectItemContainer.classList.add("project-item-container");

        const projectItem = document.createElement("h1");
        projectItem.textContent = `${projectTitle}`;
        projectItem.classList.add("project-item");
        projectItem.id = `${document.getElementById("project-input").value}`;

        const deleteProjectBtn = document.createElement("i");
        deleteProjectBtn.classList.add("fa-solid");
        deleteProjectBtn.classList.add("fa-xmark");
        deleteProjectBtn.id = `${projectTitle}`;

        projectItemContainer.appendChild(projectItem);
        projectItemContainer.appendChild(deleteProjectBtn);

        projectLists.appendChild(projectItemContainer);
        
    }

}

function renderProjectScreen(title, array) {

    const mainProjectContainer = document.querySelector("#manage-projects-container");
    mainProjectContainer.textContent = "";

    const mainTaskContainer = document.querySelector("#main-task-container");
    mainTaskContainer.textContent = "";
    renderProjectTask(array, title);

    const projectHeaderContainer = document.createElement("div");
    projectHeaderContainer.classList.add("task-title");

    const projectHeader = document.createElement("h1");
    projectHeader.textContent = `${title}`;
    projectHeader.classList.add("task-title-txt");


    const addTodo = document.createElement("div");
    addTodo.classList.add("add-todo");

    const plusIconContainer = document.createElement("div");

    const plusIcon = document.createElement("i");
    plusIcon.classList.add("fa-solid");
    plusIcon.classList.add("fa-plus");

    const todoTextContainer = document.createElement("div");

    const todoText = document.createElement("h3");
    todoText.classList.add("todo-button");
    todoText.id = `${title}`;
    todoText.textContent = "add task";


    projectHeaderContainer.appendChild(projectHeader);
    mainProjectContainer.appendChild(projectHeaderContainer);

    plusIconContainer.appendChild(plusIcon);
    todoTextContainer.appendChild(todoText);

    addTodo.appendChild(plusIconContainer);
    addTodo.appendChild(todoTextContainer);

    mainProjectContainer.appendChild(addTodo);

}

function renderProjectTask(array, title) {

    for (let i = 0; i < array.length; i++) {

        const mainTaskContainer = document.querySelector("#main-task-container");

        let arrayData = array[`${i}`]

        if (i === 0) {
            mainTaskContainer.textContent = "";
        }

        const todoContainer = document.createElement("div");
        todoContainer.classList.add("todo-container");
        todoContainer.classList.add(`${arrayData.priority}`);
    
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
    
        const todoTitle = document.createElement("p");
        todoTitle.textContent = `${arrayData.title}`
    
        const todoDate = document.createElement("p");
        todoDate.textContent = `${arrayData.date}`

        const deleteBtn = document.createElement("i");
        deleteBtn.classList.add("fa-solid");
        deleteBtn.classList.add("fa-trash-can");
        deleteBtn.dataset.screenTitle = (`${title}`)
        deleteBtn.id = (`${arrayData.title}`);
        deleteBtn.dataset.project = (`${arrayData.projectTitle}`);

        const checkBtn = document.createElement("i");
        checkBtn.classList.add("fa-solid");
        checkBtn.classList.add("fa-square-check");
        checkBtn.dataset.screenTitle = (`${title}`);
        checkBtn.id = (`${arrayData.title}`);
        checkBtn.dataset.project = (`${arrayData.projectTitle}`);

        const leftMostSide = document.createElement("div");
    
        const leftSide = document.createElement("div");

        const rightSide = document.createElement("div");
    
        rightSide.appendChild(deleteBtn);

        leftMostSide.appendChild(checkBtn);

        leftSide.appendChild(todoTitle);
        leftSide.appendChild(todoDate);

        todoItem.appendChild(leftMostSide);
        todoItem.appendChild(leftSide);
        todoItem.appendChild(rightSide);
    
        todoContainer.appendChild(todoItem);
    
        mainTaskContainer.appendChild(todoContainer);

    }

}

function renderByDateScreen(title, array) {

    const mainProjectContainer = document.querySelector("#manage-projects-container");
    mainProjectContainer.textContent = "";

    const mainTaskContainer = document.querySelector("#main-task-container");
    mainTaskContainer.textContent = "";
    renderTaskByDate(array, title);

    const projectHeaderContainer = document.createElement("div");
    projectHeaderContainer.classList.add("task-title");

    const projectHeader = document.createElement("h1");
    projectHeader.textContent = `${title}`;
    projectHeader.classList.add("task-title-txt");

    projectHeaderContainer.appendChild(projectHeader);
    mainProjectContainer.appendChild(projectHeaderContainer);

}

function renderTaskByDate(array, title) {

    for (let i = 0; i < array.length; i++) {
        const mainTaskContainer = document.querySelector("#main-task-container");

        let arrayData = array[`${i}`]

        if (i === 0) {
            mainTaskContainer.textContent = "";
        }

        const todoContainer = document.createElement("div");
        todoContainer.classList.add("todo-container");
        todoContainer.classList.add(`${arrayData.priority}`);
    
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
    
        const todoTitle = document.createElement("p");
        todoTitle.textContent = `${arrayData.title + " " + `(${arrayData.projectTitle})`}`
    
        const todoDate = document.createElement("p");
        todoDate.textContent = `${arrayData.date}`

        const deleteBtn = document.createElement("i");
        deleteBtn.classList.add("fa-solid");
        deleteBtn.classList.add("fa-trash-can");
        deleteBtn.dataset.screenTitle = (`${title}`)
        deleteBtn.id = (`${arrayData.title}`);
        deleteBtn.dataset.project = (`${arrayData.projectTitle}`);

        const checkBtn = document.createElement("i");
        checkBtn.classList.add("fa-solid");
        checkBtn.classList.add("fa-square-check");
        checkBtn.dataset.screenTitle = (`${title}`);
        checkBtn.id = (`${arrayData.title}`);
        checkBtn.dataset.project = (`${arrayData.projectTitle}`);

        const leftMostSide = document.createElement("div");
    
        const leftSide = document.createElement("div");

        const rightSide = document.createElement("div");
    
        rightSide.appendChild(deleteBtn);

        leftMostSide.appendChild(checkBtn);

        leftSide.appendChild(todoTitle);
        leftSide.appendChild(todoDate);

        todoItem.appendChild(leftMostSide);
        todoItem.appendChild(leftSide);
        todoItem.appendChild(rightSide);
    
        todoContainer.appendChild(todoItem);
    
        mainTaskContainer.appendChild(todoContainer);
    }



}

function deleteTask(e) {

    // NOR gate //

    taskStorage.taskArray = taskStorage.taskArray.filter(item => (item.title !== e.target.id) || (item.projectTitle !== e.target.dataset.project));
    taskStorage.todayArray = taskStorage.todayArray.filter(item => (item.title !== e.target.id) || (item.projectTitle !== e.target.dataset.project));
    taskStorage.weekArray = taskStorage.weekArray.filter(item => (item.title !== e.target.id) || (item.projectTitle !== e.target.dataset.project));


    let project = projectStorage.projectArray.find(item => item.title === e.target.dataset.project);
    let taskIndex = project.array.findIndex(item => item.title === e.target.id);
    project.array.splice(taskIndex, 1);

    if (e.target.dataset.screenTitle === "Home") {
        renderByDateScreen("Home", taskStorage.taskArray);
    } else if (e.target.dataset.screenTitle === "Today") {
        renderByDateScreen("Today", taskStorage.todayArray) 
    } else if (e.target.dataset.screenTitle === "This Week") {
        renderByDateScreen("This Week", taskStorage.weekArray)
    } else {
        renderProjectScreen(project.title, project.array);
    }

}

function deleteProject(e) {

    const projectTitle = e.target.id;
    let todayArray = taskStorage.todayArray;
    let weekArray = taskStorage.weekArray;
    let taskArray = taskStorage.taskArray;

    projectStorage.projectArray = projectStorage.projectArray.filter(project => project.title !== projectTitle);

    todayArray = todayArray.filter(task => task.projectTitle !== projectTitle);
    weekArray = weekArray.filter(task => task.projectTitle !== projectTitle);
    taskArray = taskArray.filter(task => task.projectTitle !== projectTitle);

    taskStorage.todayArray = todayArray;
    taskStorage.weekArray = weekArray;
    taskStorage.taskArray = taskArray;

    const projectElement = e.target.parentElement;
    projectElement.parentElement.removeChild(projectElement);

    console.log(taskStorage.taskArray);
    
    renderByDateScreen("Home", sortArray(taskStorage.taskArray));
}

function sortArray(array) {
    let sortedArray = array.sort(function(a,b){
        var c = new Date(a.date);
        var d = new Date(b.date);
        return c-d;
        });

    return sortedArray;
}



export default listeners