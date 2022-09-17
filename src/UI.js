import { project, todoItem } from "./todo";
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
  let newTask = todoItem("brush", "", "", 1);
  newProject.addTask(newTask);
  let anotherProject = project("Today");
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
  for (let i = 0; i < taskList.length; i++) {
    let task = document.createElement("li");
    task.classList.add("task");
    task.innerText = taskList[i].getTitle();
    taskArea.appendChild(task);
  }
};

const displayProject = (proj) => {
  const list = proj.getList();
  for (let i = 0; i < list.length; i++) {
    let task = list[i];
    console.log(task.getTitle());
  }
};

export { createProject, init, displayProject };
