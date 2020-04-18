package com.itlize.joole.DAO;

import com.itlize.joole.Pojo.ProjectProduct;

import java.util.List;

public interface ProjectProductDAO {
    boolean deleteAll();
    boolean saveAll(List<ProjectProduct> ppList);
    List<ProjectProduct> getAll();
}
