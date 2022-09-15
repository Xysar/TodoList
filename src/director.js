const director = () => {
  const projectList = [];
  const getList = () => projectList;

  const addList = (project) => {
    projectList.push(project);
  };

  const getProject = (num) => projectList[num];

  return {
    getList,
    getProject,
    addList,
  };
};

export { director };
