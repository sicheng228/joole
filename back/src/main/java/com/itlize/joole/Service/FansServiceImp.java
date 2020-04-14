package com.itlize.joole.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.itlize.joole.DAO.FanDAO;
import com.itlize.joole.Pojo.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class FansServiceImp implements FansService{
    @Autowired
    FanDAO fanDAO;

    @Override
    public String getFans() throws JsonProcessingException {
        List<String> newList=null;
        List<Product> pList = fanDAO.getProductList();

        ObjectMapper mapper = new ObjectMapper();
        String value = mapper.writeValueAsString(pList);
        System.out.println(pList);
        System.out.println(value);
        return value;
    }

}
