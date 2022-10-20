const director = () => {
  const projectList = [];
  let currentProjectIndex = null;

  const getList = () => projectList;

  const removeProject = (index) => {
    projectList.splice(index, 1);
  };

  const getCurrentProject = () => projectList[currentProjectIndex];
  const getCurrentProjectIndex = () => currentProjectIndex;

  const addProject = (project) => {
    projectList.push(project);
  };

  const getProject = (num) => {
    currentProjectIndex = num;
    return projectList[num];
  };
  const toJSON = () => {
    return getList();
  };
  return {
    toJSON,
    removeProject,
    getList,
    getProject,
    addProject,
    getCurrentProject,
    getCurrentProjectIndex,
  };
};

export { director };
