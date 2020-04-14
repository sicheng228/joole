package com.itlize.joole.Pojo;

import javax.persistence.*;

@Entity
@Table
public class ProductUser {
    @Id
    @GeneratedValue
    private Integer puid;
    @ManyToOne
    private User user;
    @ManyToOne
    private Product product;

}
