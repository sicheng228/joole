package com.itlize.joole.Service;

import com.itlize.joole.Pojo.ProjectProduct;

import java.util.List;

public interface ProjectProductService {
    boolean updateAll(List<ProjectProduct> ppList);
    List<ProjectProduct> getAll();
    boolean deleteById(Integer ppid);
    boolean add(ProjectProduct pp);

}
