const todoItem = (title, description, dueDate, priority) => {
  const getTitle = () => title;
  const getDesc = () => description;
  const getDate = () => dueDate;
  const getPriority = () => priority;
  return { getTitle, getDesc, getDate, getPriority };
};

const project = () => {
  const todolist = [];
  const getList = () => todolist;

  const addTask = (todo) => {
    todolist.push(todo);
  };
  return { addTask, getList };
};

export { todoItem, project };
