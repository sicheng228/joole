package com.itlize.joole.Service;

import com.itlize.joole.Pojo.User;

public interface UserService {
    public User getByUsername(String uname);

//    public User verification(String uname, String pass);

    public boolean signUp(User u);
}
