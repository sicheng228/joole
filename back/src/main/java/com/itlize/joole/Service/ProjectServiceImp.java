package com.itlize.joole.Service;

import com.itlize.joole.DAO.ProjectDAO;
import com.itlize.joole.Pojo.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectServiceImp implements ProjectService{
    @Autowired
    ProjectDAO projectDAO;

    @Override
    public boolean addProject(String pname){
        if(projectDAO.findProjectByName(pname)==null){
            projectDAO.addProject(new Project(pname));
            return true;
        }else return false;
    }

    @Override
    public boolean deleteProject(String pname){
        if(projectDAO.findProjectByName(pname)!=null){
            projectDAO.deleteProject(projectDAO.findProjectByName(pname));
            return true;
        }else return false;
    }
    @Override
    public List<Project> findAllProjects(){
        try{
            return projectDAO.findAllProjects();
        }catch (Exception e){
            e.getStackTrace();
            return null;
        }
    }
}
