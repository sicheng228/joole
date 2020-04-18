package com.itlize.joole.DAO;

import com.itlize.joole.Pojo.Project;
import com.itlize.joole.Pojo.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ProjectDAOImp implements ProjectDAO{

    @Autowired
    SessionFactory factory;

    @Override
    public boolean addProject(Project p){
        Session session = factory.openSession();
        Transaction tx = null;
        try {
            tx = session.beginTransaction();
            session.save(p);
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
    public boolean deleteProject(Project p) {
        Session session = null;
        try {
            session = factory.openSession();
            Transaction tx = session.beginTransaction();
            Query qry = session.createQuery("DELETE FROM Project p where p.pname=:name");
            qry.setParameter("name", p.getPname());
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

    @Override
    public Project findProjectByName(String pname){
        Project p=null;
        try{
            Session session=factory.openSession();
            String sql="FROM Project where pname=:pn";
            Query query=session.createQuery(sql);
            query.setParameter("pn", pname);
            p=(Project)query.uniqueResult();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return p;
    }
    @Override
    public List<Project> findAllProjects(){
        List<Project> plist = new ArrayList<>();
        try{
            Session session=factory.openSession();
            String sql="FROM Project";
            Query query=session.createQuery(sql);
            plist=(List<Project>) query.getResultList();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return plist;

    }
}
