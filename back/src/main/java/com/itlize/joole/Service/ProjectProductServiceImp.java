package com.itlize.joole.Service;

import com.itlize.joole.DAO.ProjectProductDAO;
import com.itlize.joole.Pojo.ProjectProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectProductServiceImp implements ProjectProductService{
    @Autowired
    ProjectProductDAO projectProductDAO;

    @Override
    public boolean updateAll(List<ProjectProduct> ppList){
        try {
            projectProductDAO.deleteAll();
            projectProductDAO.saveAll(ppList);
            return true;
        }catch (Exception e){
            e.getStackTrace();
            return false;
        }
    }
    @Override
    public List<ProjectProduct> getAll(){
        List<ProjectProduct> ppList;
        try{
            ppList=projectProductDAO.getAll();
            return ppList;
        }catch (Exception e){
            e.getStackTrace();
            return null;
        }
    }
}
