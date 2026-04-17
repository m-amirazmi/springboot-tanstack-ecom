package com.merazmi.ecom.repo;

import com.merazmi.ecom.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<Product, Integer> {
}
