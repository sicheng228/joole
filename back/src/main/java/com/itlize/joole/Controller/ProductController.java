package com.itlize.joole.Controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.itlize.joole.DAO.FanDAO;
import com.itlize.joole.Pojo.Product;
import com.itlize.joole.Service.FansService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {


    @Autowired
    FansService fansService;

    @GetMapping("/fans")
    public ResponseEntity<?> signup() {
            try{

                String pList= fansService.getFans();
                return new ResponseEntity<>(pList, HttpStatus.CREATED);
            }catch (Exception e){
                e.getStackTrace();
                return new ResponseEntity<>("sth wrong",HttpStatus.EXPECTATION_FAILED);
            }
    }
    //Get summary

    //Get detail

}
