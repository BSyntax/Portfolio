import { createContext, useContext } from "react";  
import { projects } from "../../data/projects";

export const ProjectsContext = createContext();

export const ProjectsContextProvider = ({ children }) => {
  const retrieveProject = (id) => {
    return projects.find((project) => project.id === id);
  };

  const retrieveProjects = () => {
    return projects;
  };

  return (
    <ProjectsContext.Provider value={{ retrieveProject, retrieveProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => {
  return useContext(ProjectsContext);
};