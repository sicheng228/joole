package com.itlize.joole.DAO;

import com.itlize.joole.Pojo.Product;
import com.itlize.joole.Pojo.Project;
import com.itlize.joole.Pojo.ProjectProduct;

import java.util.List;

public interface ProjectProductDAO {
    boolean deleteAll();
    boolean saveAll(List<ProjectProduct> ppList);
    List<ProjectProduct> getAll();
    boolean deleteById(Integer ppid);
    boolean add(ProjectProduct pp);
    ProjectProduct findByProjectAndProdcuct(Project pj, Product pd);
}
