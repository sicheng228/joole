package com.itlize.joole.DAO;

import com.itlize.joole.Pojo.User;


public interface UserDAO {

    public boolean addUser(User u);

    public User getUserByName(String username);

//    public boolean add(String username,String password);
}
