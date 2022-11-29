package com.vishal.biddingPlatform.dao;

import com.vishal.biddingPlatform.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {
    @Override
    List<User> findAll();


}
