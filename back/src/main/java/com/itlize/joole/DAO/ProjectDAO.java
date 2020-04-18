package com.itlize.joole.DAO;

import com.itlize.joole.Pojo.Project;

import java.util.List;

public interface ProjectDAO {
    boolean addProject(Project p);
    boolean deleteProject(Project p);
    Project findProjectByName(String pname);
    List<Project> findAllProjects();
}
