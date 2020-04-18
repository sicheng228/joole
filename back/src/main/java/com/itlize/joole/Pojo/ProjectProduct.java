package com.itlize.joole.Pojo;

import javax.persistence.*;

@Entity
@Table
public class ProjectProduct {
    @Id
    @GeneratedValue
    private Integer ppid;

    @ManyToOne(targetEntity = Project.class,cascade = CascadeType.DETACH)
    private Project project;

    @ManyToOne(targetEntity = Product.class,cascade = CascadeType.DETACH)
    private Product product;

    public ProjectProduct() {
    }

    public ProjectProduct(Project project, Product product) {
        this.project = project;
        this.product = product;
    }

    public Integer getPpid() {
        return ppid;
    }

    public void setPpid(Integer ppid) {
        this.ppid = ppid;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
