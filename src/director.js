const director = () => {
  const projectList = [];
  let currentProjectIndex = null;

  const getList = () => projectList;

  const getCurrentProject = () => projectList[currentProjectIndex];
  const getCurrentProjectIndex = () => currentProjectIndex;

  const addList = (project) => {
    projectList.push(project);
  };

  const getProject = (num) => {
    currentProjectIndex = num;
    return projectList[num];
  };

  return {
    getList,
    getProject,
    addList,
    getCurrentProject,
    getCurrentProjectIndex,
  };
};

export { director };
