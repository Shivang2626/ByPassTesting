package com.vishal.biddingPlatform.dao;

import com.vishal.biddingPlatform.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductDao extends JpaRepository<Product, Integer> {
    @Override
    List<Product> findAll();

    @Query(value = "SELECT * FROM product where owner_id = ?1", nativeQuery = true)
    List<Product> getProductsListByBidderId(int ownerId);
}
