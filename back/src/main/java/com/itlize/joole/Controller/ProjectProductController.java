package com.itlize.joole.Controller;


import com.itlize.joole.DAO.FanDAO;
import com.itlize.joole.DAO.ProjectDAOImp;
import com.itlize.joole.DAO.ProjectProductDAO;
import com.itlize.joole.Pojo.Product;
import com.itlize.joole.Pojo.Project;
import com.itlize.joole.Pojo.ProjectProduct;
import com.itlize.joole.Service.ProjectProductService;
import com.itlize.joole.Service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/pp")
public class ProjectProductController {

    @Autowired
    ProjectProductService projectProductService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getAll")
    public ResponseEntity<?> getAll(){
        try{
            List<ProjectProduct> ppList = projectProductService.getAll();
            return new ResponseEntity<>(ppList, HttpStatus.OK);
        }catch (Exception e){
            e.getStackTrace();
            return new ResponseEntity<>("sth wrong!",HttpStatus.CONFLICT);
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/update")
    public ResponseEntity<?> update(@RequestBody List<ProjectProduct> ppList){
        try{
            projectProductService.updateAll(ppList);
            return new ResponseEntity<>("updated!", HttpStatus.OK);
        }catch (Exception e){
            e.getStackTrace();
            return new ResponseEntity<>("sth wrong!",HttpStatus.CONFLICT);
        }
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody ProjectProduct pp){
        try{
            projectProductService.add(pp);
            return new ResponseEntity<>(projectProductService.getAll(), HttpStatus.OK);
        }catch (Exception e){
            e.getStackTrace();
            return new ResponseEntity<>("sth wrong!",HttpStatus.CONFLICT);
        }
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/deleteById")
    public ResponseEntity<?> delete(@RequestBody ProjectProduct pp){
        try{
            projectProductService.deleteById(pp.getPpid());
            return new ResponseEntity<>(projectProductService.getAll(), HttpStatus.OK);
        }catch (Exception e){
            e.getStackTrace();
            return new ResponseEntity<>("sth wrong!",HttpStatus.CONFLICT);
        }
    }













    @Autowired
    FanDAO fanDAO;
    @Autowired
    ProjectDAOImp projectDAOImp;
    @PostMapping("/createDB")
    public Object create(){

        Project j1=new Project("project1");
        Project j2=new Project("project2");
        Project j3=new Project("project3");
        Project j4=new Project("project4");

        List<Product> plist=fanDAO.getProductList();

        Product p1=plist.get(0);
        Product p2=plist.get(1);
        Product p3=plist.get(2);
        Product p4=plist.get(3);
        Product p5=plist.get(4);


        projectDAOImp.addProject(j1);
        projectDAOImp.addProject(j2);
        projectDAOImp.addProject(j3);
        projectDAOImp.addProject(j4);

        ProjectProduct pp1= new ProjectProduct(j1,p1);
        ProjectProduct pp2= new ProjectProduct(j1,p3);
        ProjectProduct pp3= new ProjectProduct(j2,p2);
        ProjectProduct pp4= new ProjectProduct(j2,p3);
        ProjectProduct pp5= new ProjectProduct(j2,p5);
        ProjectProduct pp6= new ProjectProduct(j3,p1);
        ProjectProduct pp7= new ProjectProduct(j3,p4);
        ProjectProduct pp8= new ProjectProduct(j4,p2);
        ProjectProduct pp9= new ProjectProduct(j4,p3);
        ProjectProduct pp10= new ProjectProduct(j4,p5);

        List<ProjectProduct> pplist=new ArrayList<>();

        pplist.add(pp1);
        pplist.add(pp2);
        pplist.add(pp3);
        pplist.add(pp4);
        pplist.add(pp5);
        pplist.add(pp6);
        pplist.add(pp7);
        pplist.add(pp8);
        pplist.add(pp9);
        pplist.add(pp10);

        projectProductService.updateAll(pplist);
        return pplist;
    }
}
