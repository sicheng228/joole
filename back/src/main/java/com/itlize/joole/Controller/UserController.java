package com.itlize.joole.Controller;

import com.itlize.joole.Pojo.User;
import com.itlize.joole.Service.UserService;
import com.itlize.joole.utils.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;
import java.security.Principal;


@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User u){
        if(userService.getByUsername(u.getUsername())==null){
            userService.signUp(u);
            return new ResponseEntity<>(u, HttpStatus.CREATED);
        }else return new ResponseEntity<>("this user already existed",HttpStatus.CONFLICT);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/login")
    public ResponseEntity<?> login(Principal principal){
        if(principal == null){
            //This should be ok http status because this will be used for logout path.
            return ResponseEntity.ok("null");
        }
        UsernamePasswordAuthenticationToken authenticationToken = (UsernamePasswordAuthenticationToken) principal;
        User user = userService.getByUsername(authenticationToken.getName());
        user.setToken(jwtTokenProvider.generateToken(authenticationToken));
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
