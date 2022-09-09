import { project } from "./todo";

const content = document.getElementById("content");

const init = () => {
  const header = document.createElement("div");
  header.setAttribute("id", "header");
  const headerText = document.createElement("p");
  headerText.innerText = "Todo List";
  const icon = document.createElement("img");
  icon.setAttribute("id", "header-icon");
  icon.src = "./images/checkmarkimage.svg";
  header.appendChild(icon);
  header.appendChild(headerText);
  content.appendChild(header);
};

const displayProject = (proj) => {
  const list = proj.getList();
  for (let i = 0; i < list.length; i++) {
    let task = list[i];
    console.log(task.getTitle());
  }
};

export { init, displayProject };
