package com.itlize.joole.Pojo;
import javax.persistence.*;
import java.util.Collection;
import java.util.HashSet;

@Entity
@Table
public class User {

    @Id
    @GeneratedValue
    private Integer uid;
    private String username;
    private String password;
    private String register_date;
    @Transient
    private String token;
    @OneToMany(cascade = CascadeType.REMOVE,mappedBy = "user")
    private Collection<ProductUser> pu = new HashSet<ProductUser>();

    public User() {
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Collection<ProductUser> getPu() {
        return pu;
    }

    public void setPu(Collection<ProductUser> pu) {
        this.pu = pu;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @Override
    public String toString(){
        return "User{" +
                "username='" + username + '\'' +
                '}';
    }
}
