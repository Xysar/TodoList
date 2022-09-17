const todoItem = (title, description, dueDate, priority) => {
  const getTitle = () => title;
  const getDesc = () => description;
  const getDate = () => dueDate;
  const getPriority = () => priority;
  return { getTitle, getDesc, getDate, getPriority };
};

const project = (title) => {
  const todolist = [];
  const getList = () => todolist;

  const addTask = (todo) => {
    todolist.push(todo);
  };

  const getTitle = () => title;

  return { addTask, getList, getTitle };
};

export { todoItem, project };
