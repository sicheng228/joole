package com.itlize.joole.DAO;

import com.itlize.joole.Pojo.Product;
import com.itlize.joole.Pojo.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FanDAOImp implements FanDAO {
    @Autowired
    SessionFactory factory;

    @Override
    public List<Product> getProductList() {
        List<Product> pList=null;
        try{
            Session session=factory.openSession();

            String sql="FROM Product";
            Query query=session.createQuery(sql);
            pList = (List<Product>) query.getResultList();

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        return pList;
    }
}
