package com.itlize.joole.Service;

import com.itlize.joole.Pojo.Project;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ProjectService {
    boolean addProject(String pname);
    boolean deleteProject(String pname);
    List<Project> findAllProjects();

}
