const todoItem = (title, description, dueDate, priority) => {
  const getTitle = () => title;
  const getDesc = () => description;
  const getDate = () => dueDate;
  const getPriority = () => priority;
  function getInfo() {
    return [title, description, dueDate, priority];
  }
  function toJSON() {
    return getInfo();
  }
  return { toJSON, getTitle, getDesc, getDate, getPriority, getInfo };
};

const project = (title) => {
  const todolist = [];
  const getTasks = () => todolist;

  const addTask = (todo) => {
    todolist.push(todo);
  };

  const removeTask = (index) => {
    todolist.splice(index, 1);
  };

  const toJSON = () => {
    return [getTitle(), todolist];
  };

  const getTitle = () => title;

  return { toJSON, addTask, getTasks, getTitle, removeTask };
};

const dateHelper = (date, time) => {
  const getDate = () => {
    if (date === "") {
      return "";
    }
    let format = new Date(date);
    return format.toDateString();
  };

  const getTime = () => {
    if (time === "") {
      return "";
    }
    return conv24to12HourClock(time);
  };

  const getInfoInList = () => {
    return [getDate(), getTime()];
  };

  const toJSON = () => {
    return getInfoInList();
  };

  const conv24to12HourClock = (time) => {
    const timeArray = time.split(":");
    let meridiemPeriod = "AM";
    let hours = Number(timeArray[0]);
    let minutes = timeArray[1];
    if (hours > 12) {
      hours -= 12;
      meridiemPeriod = "PM";
    }
    return hours + ":" + minutes + " " + meridiemPeriod;
  };

  return { toJSON, getDate, getTime, conv24to12HourClock, getInfoInList };
};

export { todoItem, project, dateHelper };
