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

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestParam String un,@RequestParam String pw){
        if(userService.getByUsername(un)==null){
           User u=new User(un,pw);
            userService.signUp(u);
            return new ResponseEntity<>(u.toString(), HttpStatus.CREATED);
        }else return new ResponseEntity<>("this user already existed",HttpStatus.CONFLICT);
    }
    @GetMapping("/login")
    public ResponseEntity<?> login(Principal principal){
        if(principal == null){
            //This should be ok http status because this will be used for logout path.
            return ResponseEntity.ok("principal");
        }
        UsernamePasswordAuthenticationToken authenticationToken = (UsernamePasswordAuthenticationToken) principal;
        User user = userService.getByUsername(authenticationToken.getName());
        user.setToken(jwtTokenProvider.generateToken(authenticationToken));
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
