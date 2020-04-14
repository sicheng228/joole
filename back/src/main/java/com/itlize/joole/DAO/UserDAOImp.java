package com.itlize.joole.DAO;

import com.itlize.joole.Pojo.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDAOImp implements UserDAO{
    @Autowired
    SessionFactory factory;

    //    @SuppressWarnings("unchecked")
    @Override
    public boolean addUser(User u) {
        Session session = factory.openSession();
        Transaction tx = null;
        try {
            tx = session.beginTransaction();
            session.save(u);
            tx.commit();
            return true;
        } catch (Exception e){
            e.getStackTrace();
            return false;
        }finally {
            session.close();
        }
    }

    @Override
    public User getUserByName(String uname) {
        User u=null;
        try{
            Session session=factory.openSession();

            String sql="FROM User where username=:uname";
            Query query=session.createQuery(sql);
            query.setParameter("uname", uname);
            u=(User)query.uniqueResult();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return u;
    }

}
