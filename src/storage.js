import { project, todoItem, dateHelper } from "./todo";
import { director } from "./director";

const Storage = () => {
  const saveDirector = (dir) => {
    localStorage.setItem("todolist", JSON.stringify(dir));
  };

  const getDirector = () => {
    let parsedList = JSON.parse(localStorage.getItem("todolist"));
    let resultDirector = director();
    parsedList.forEach((e) => {
      let newProject = project(e[0]);
      let taskList = e[1];
      taskList.forEach((e) => {
        let newTask = taskCompiler(e);
        newProject.addTask(newTask);
      });
      resultDirector.addProject(newProject);
    });
    return resultDirector;
  };

  const taskCompiler = (taskArray) => {
    let dateArray = taskArray[2];
    let dateObject = dateHelper(dateArray[0], dateArray[1]);
    let taskObject = todoItem(
      taskArray[0],
      taskArray[1],
      dateObject,
      taskArray[3]
    );
    return taskObject;
  };

  const addProject = (newProject) => {};
  const deleteProject = (project) => {};
  const addTask = (Project, newTask) => {};
  const deleteTask = (Project, task) => {};

  return {
    saveDirector,
    getDirector,
    addProject,
    addTask,
    deleteTask,
    deleteProject,
  };
};

export { Storage };
