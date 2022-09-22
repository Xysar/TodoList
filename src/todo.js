const todoItem = (title, description, dueDate, priority) => {
  const getTitle = () => title;
  const getDesc = () => description;
  const getDate = () => dueDate.toDateString() + dueDate.toLocaleTimeString();
  const getPriority = () => priority;
  return { getTitle, getDesc, getDate, getPriority };
};

const project = (title) => {
  const todolist = [];
  const getTasks = () => todolist;

  const addTask = (todo) => {
    todolist.push(todo);
  };

  const getTitle = () => title;

  return { addTask, getTasks, getTitle };
};

export { todoItem, project };
