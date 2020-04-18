package com.itlize.joole.DAO;

import com.itlize.joole.Pojo.Product;
import com.itlize.joole.Pojo.Project;
import com.itlize.joole.Pojo.ProjectProduct;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProjectProductDAOImp implements ProjectProductDAO{

    @Autowired
    SessionFactory factory;

    @Override
    public boolean deleteAll() {
        Session session = null;
        try {
            session = factory.openSession();
            Transaction tx = session.beginTransaction();
            Query qry = session.createQuery("DELETE FROM ProjectProduct");
            qry.executeUpdate();
            tx.commit();
            return true;
        } catch (Exception e) {
            e.getStackTrace();
            return false;
        } finally {
            session.close();
        }
    }

    public boolean saveAll(List<ProjectProduct> ppList){
        Session session = factory.openSession();
        Transaction tx = null;
        try {
            tx = session.beginTransaction();
            for(ProjectProduct i : ppList){
                session.save(i);
            }
            tx.commit();
            return true;
        } catch (Exception e){
            e.getStackTrace();
            return false;
        }finally {
            session.close();
        }
    }
    public List<ProjectProduct> getAll(){
        List<ProjectProduct> ppList=null;
        try{
            Session session=factory.openSession();
            String sql="FROM ProjectProduct ";
            Query query=session.createQuery(sql);
            ppList = (List<ProjectProduct>) query.getResultList();

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        return ppList;
    }
}
