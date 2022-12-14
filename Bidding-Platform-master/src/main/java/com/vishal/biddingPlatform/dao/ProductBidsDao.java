package com.vishal.biddingPlatform.dao;

import com.vishal.biddingPlatform.model.ProductBids;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductBidsDao extends JpaRepository<ProductBids, Integer> {
    @Override
    List<ProductBids> findAll();

    @Query(value = "SELECT * FROM product_bids where bid_product_id = ?1", nativeQuery = true)
    List<ProductBids> getBidsByProductId(int productId);
}
