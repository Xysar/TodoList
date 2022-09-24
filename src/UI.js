import { project, todoItem, dateHelper } from "./todo";
import { director } from "./director";

const content = document.getElementById("content");
const dir = director();

const init = () => {
  const header = document.createElement("div"); //header element
  header.setAttribute("id", "header");
  const headerText = document.createElement("p");
  headerText.innerText = "Todo List";
  const icon = document.createElement("img");
  icon.setAttribute("id", "header-icon");
  icon.src = "./images/checkmarkimage.svg";
  header.appendChild(icon);
  header.appendChild(headerText);

  const navigation = document.createElement("div");
  navigation.setAttribute("id", "navigation");
  let projectList = document.createElement("ul");
  projectList.setAttribute("id", "project-list");
  navigation.appendChild(projectList);
  const workArea = document.createElement("div");
  workArea.setAttribute("id", "work-area");
  let workList = document.createElement("ul");
  workList.setAttribute("id", "work-list");
  workArea.appendChild(workList);

  content.appendChild(header);
  content.appendChild(navigation);
  content.appendChild(workArea);
  initProjects();
};

const initProjects = () => {
  let newProject = project("Inbox");
  let anotherProject = project("Today");
  let task = todoItem(
    "asd",
    "asd",
    dateHelper("September 14 2012", "14:00"),
    1
  );
  newProject.addTask(task);
  dir.addList(newProject);
  dir.addList(anotherProject);
  loadProjects();
};

const loadProjects = () => {
  let list = dir.getList();
  for (let i = 0; i < list.length; i++) {
    let e = list[i];
    createProject(e.getTitle(), i);
  }
};

const createProject = (title, num) => {
  const projectList = document.getElementById("project-list");
  const projectElement = document.createElement("li");
  projectElement.classList.add("project");
  projectElement.setAttribute("data", num);
  const projectIcon = document.createElement("img");
  const projectName = document.createElement("p");
  projectName.innerText = title;
  projectIcon.src = "./images/inboxIcon.png"; //TODO: change to dynamic
  projectElement.appendChild(projectIcon);
  projectElement.appendChild(projectName);
  projectList.appendChild(projectElement);
  projectElement.addEventListener("click", (e) => {
    openProject(e.target.getAttribute("data"));
  });
};

const openProject = (num) => {
  let curProject = dir.getProject(num);
  let taskList = curProject.getTasks();
  let taskArea = document.getElementById("work-list");
  taskArea.innerHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    let task = createTaskElement(taskList[i], i);
    taskArea.appendChild(task);
  }

  let createButton = createTaskButton();
  let addTaskForm = createTaskForm();

  createButton.addEventListener("click", (e) => {
    if (taskArea.lastElementChild === addTaskForm) {
      return;
    }
    taskArea.appendChild(addTaskForm);
  });

  taskArea.appendChild(createButton);
};

const createTaskElement = (taskObject, index) => {
  let task = document.createElement("li");
  task.classList.add("task");

  let checkButton = document.createElement("button");
  checkButton.classList.add("check-button");

  checkButton.addEventListener("click", (e) => {
    removeTask(index);
  });

  let taskHeader = document.createElement("div");
  taskHeader.classList.add("task-header");

  let taskHeaderText = document.createElement("p");
  let taskHeaderDate = document.createElement("p");
  taskHeaderText.innerText = taskObject.getTitle();
  taskHeaderDate.innerText =
    taskObject.getDate().getDate() + " " + taskObject.getDate().getTime();

  taskHeader.appendChild(taskHeaderText);
  taskHeader.appendChild(taskHeaderDate);

  let descriptionArea = document.createElement("div");
  descriptionArea.innerText = "test";
  descriptionArea.classList.add("description-area");

  const removeDesc = () => {
    if (task.lastElementChild === descriptionArea) {
      task.removeChild(descriptionArea);
    } else {
      task.appendChild(descriptionArea);
    }
  };

  taskHeader.addEventListener("click", (e) => removeDesc());
  descriptionArea.addEventListener("click", (e) => removeDesc());

  task.appendChild(checkButton);
  task.appendChild(taskHeader);

  return task;
};

const removeTask = (index) => {
  dir.getCurrentProject().removeTask(index);
  openProject(dir.getCurrentProjectIndex());
};

const createTaskForm = () => {
  let form = document.createElement("form");
  form.id = "task-form";

  let tasklabel = document.createElement("label");
  tasklabel.innerText = "Task:";
  tasklabel.setAttribute("for", "task");

  let taskinput = document.createElement("input");
  taskinput.setAttribute("type", "text");
  taskinput.setAttribute("name", "task");
  taskinput.id = "task-input";
  taskinput.required = true;

  let desclabel = document.createElement("label");
  desclabel.innerText = "Description:";
  desclabel.setAttribute("for", "task-desc");

  let descinput = document.createElement("input");
  descinput.setAttribute("type", "text");
  descinput.setAttribute("name", "task-desc");
  descinput.id = "task-desc";

  let datelabel = document.createElement("label");
  datelabel.innerText = "Due Date:";
  datelabel.setAttribute("for", "task-due-date");

  let dateinput = document.createElement("input");
  dateinput.setAttribute("type", "date");
  dateinput.setAttribute("name", "task-due-date");
  dateinput.id = "task-due-date";

  let timeinput = document.createElement("input");
  timeinput.setAttribute("type", "time");
  timeinput.setAttribute("name", "task-due-time");
  timeinput.id = "task-due-time";

  let prioritylabel = document.createElement("label");
  prioritylabel.innerText = "Priority:";
  prioritylabel.setAttribute("for", "priority");

  let priorityinput = document.createElement("select");
  priorityinput.setAttribute("name", "priority");
  priorityinput.id = "task-priority";

  let option1 = document.createElement("option");
  option1.setAttribute("value", "1");
  option1.innerText = "1";
  let option2 = document.createElement("option");
  option2.setAttribute("value", "2");
  option2.innerText = "2";
  let option3 = document.createElement("option");
  option3.setAttribute("value", "3");
  option3.innerText = "3";

  priorityinput.appendChild(option1);
  priorityinput.appendChild(option2);
  priorityinput.appendChild(option3);

  let submitButton = document.createElement("button");
  submitButton.id = "task-submit";
  submitButton.innerText = "Submit";
  submitButton.addEventListener("click", (e) => {
    if (taskinput.value === "") {
      return;
    }
    e.preventDefault();

    console.log(dateinput.value);
    console.log(timeinput.value);
    let newTask = createTask(
      taskinput,
      descinput,
      dateinput,
      timeinput,
      priorityinput
    );
    dir.getCurrentProject().addTask(newTask);
    openProject(dir.getCurrentProjectIndex());
  });

  form.appendChild(tasklabel);
  form.appendChild(taskinput);
  form.appendChild(desclabel);
  form.appendChild(descinput);
  form.appendChild(datelabel);
  form.appendChild(dateinput);
  form.appendChild(timeinput);
  form.appendChild(prioritylabel);
  form.appendChild(priorityinput);
  form.appendChild(submitButton);
  return form;
};

const createTask = (
  taskinput,
  descinput,
  dateinput,
  timeinput,
  priorityinput
) => {
  let task = todoItem(
    taskinput.value,
    descinput.value,
    dateHelper(dateinput.value, timeinput.value),
    priorityinput.value
  );
  return task;
};

const createTaskButton = () => {
  let button = document.createElement("div");
  button.classList.add("add-task");
  button.innerText = "+ Add New Task";
  return button;
};

export { createProject, init };
