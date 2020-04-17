package com.itlize.joole.Service;

import com.itlize.joole.DAO.UserDAO;
import com.itlize.joole.Pojo.User;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImp implements UserService {
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Autowired
    UserDAO userDAO;
    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public User getByUsername(String name) {
        try {
            return userDAO.getUserByName(name);
        }catch (Exception e){
            System.out.println("sth wrong");
            return null;
        }
    }

//    public User verification(String uname, String pass);

    public boolean signUp(User u){
        if (userDAO.getUserByName(u.getUsername())==null){
            u.setPassword(passwordEncoder.encode(u.getPassword()));
            userDAO.addUser(u);
            return true;
        }else{
            return false;
        }

    }
}
