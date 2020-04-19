package com.itlize.joole.Controller;

import com.itlize.joole.Pojo.Project;
import com.itlize.joole.Service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/projects")
public class ProjectController {
    @Autowired
    ProjectService projectService;


    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/add")
    public ResponseEntity<?> addProject(@RequestBody String pname){
        try{
            projectService.addProject(pname);
            return new ResponseEntity<>("{Has been added!}",HttpStatus.OK);
        }catch (Exception e){
            e.getStackTrace();
            return new ResponseEntity<>("this user already existed",HttpStatus.CONFLICT);
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/delete")
    public ResponseEntity<?> deleteProject(@RequestBody String pname){
        try{
            projectService.deleteProject(pname);
            return new ResponseEntity<>(pname+" has been deleted!",HttpStatus.OK);
        }catch (Exception e){
            e.getStackTrace();
            return new ResponseEntity<>("Cannot find this project!",HttpStatus.CONFLICT);
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getProjects")
    public ResponseEntity<?> getProjects(){
        try{
            List<Project> plist = projectService.findAllProjects();
            return new ResponseEntity<>(plist,HttpStatus.OK);
        }catch (Exception e){
            e.getStackTrace();
            return new ResponseEntity<>("sth wrong",HttpStatus.CONFLICT);
        }
    }
}
