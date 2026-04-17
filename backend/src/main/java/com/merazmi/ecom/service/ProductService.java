package com.merazmi.ecom.service;

import com.merazmi.ecom.dtos.CreateProductRequest;
import com.merazmi.ecom.model.Product;
import com.merazmi.ecom.repo.ProductRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepo repo;

    public List<Product> findAll() {
        return repo.findAll();
    }

    public Optional<Product> findById(int id) {
        return repo.findById(id);
    }

    public Product create(CreateProductRequest productRequest) {
        Product product = new Product();
        product.setName(productRequest.name());
        product.setPrice(productRequest.price());
        product.setDescription(productRequest.description());
        product.setCategory(productRequest.category());
        product.setBrand(productRequest.brand());
        if (productRequest.isAvailable() != null) {
            product.setAvailable(productRequest.isAvailable());
        }
        if (productRequest.quantity() != null) {
            product.setQuantity(productRequest.quantity());
        }
        return repo.save(product);
    }

    public int seed() {
        Product productA = new Product();
        productA.setName("iPhone 15");
        productA.setDescription("Latest Apple smartphone");
        productA.setBrand("Apple");
        productA.setPrice(new BigDecimal("4999.00"));
        productA.setCategory("Smartphone");
        productA.setReleaseAt(LocalDateTime.now().minusMonths(6));
        productA.setAvailable(true);
        productA.setQuantity(50);

        Product productB = new Product();
        productB.setName("Galaxy S24");
        productB.setDescription("Samsung flagship phone");
        productB.setBrand("Samsung");
        productB.setPrice(new BigDecimal("4599.00"));
        productB.setCategory("Smartphone");
        productB.setReleaseAt(LocalDateTime.now().minusMonths(5));
        productB.setAvailable(true);
        productB.setQuantity(40);

        Product productC = new Product();
        productC.setName("Xiaomi 14");
        productC.setDescription("High performance budget flagship");
        productC.setBrand("Xiaomi");
        productC.setPrice(new BigDecimal("2999.00"));
        productC.setCategory("Smartphone");
        productC.setReleaseAt(LocalDateTime.now().minusMonths(4));
        productC.setAvailable(true);
        productC.setQuantity(60);

        Product productD = new Product();
        productD.setName("MacBook Air M3");
        productD.setDescription("Lightweight laptop with M3 chip");
        productD.setBrand("Apple");
        productD.setPrice(new BigDecimal("5999.00"));
        productD.setCategory("Laptop");
        productD.setReleaseAt(LocalDateTime.now().minusMonths(3));
        productD.setAvailable(true);
        productD.setQuantity(25);

        Product productE = new Product();
        productE.setName("Dell XPS 13");
        productE.setDescription("Premium ultrabook laptop");
        productE.setBrand("Dell");
        productE.setPrice(new BigDecimal("5499.00"));
        productE.setCategory("Laptop");
        productE.setReleaseAt(LocalDateTime.now().minusMonths(8));
        productE.setAvailable(true);
        productE.setQuantity(20);

        Product productF = new Product();
        productF.setName("iPad Pro 12.9");
        productF.setDescription("High-end tablet from Apple");
        productF.setBrand("Apple");
        productF.setPrice(new BigDecimal("4299.00"));
        productF.setCategory("Tablet");
        productF.setReleaseAt(LocalDateTime.now().minusMonths(7));
        productF.setAvailable(true);
        productF.setQuantity(30);

        Product productG = new Product();
        productG.setName("Sony WH-1000XM5");
        productG.setDescription("Noise cancelling headphones");
        productG.setBrand("Sony");
        productG.setPrice(new BigDecimal("1499.00"));
        productG.setCategory("Accessories");
        productG.setReleaseAt(LocalDateTime.now().minusMonths(10));
        productG.setAvailable(true);
        productG.setQuantity(70);

        Product productH = new Product();
        productH.setName("AirPods Pro 2");
        productH.setDescription("Wireless earbuds with ANC");
        productH.setBrand("Apple");
        productH.setPrice(new BigDecimal("1099.00"));
        productH.setCategory("Accessories");
        productH.setReleaseAt(LocalDateTime.now().minusMonths(9));
        productH.setAvailable(true);
        productH.setQuantity(80);

        Product productI = new Product();
        productI.setName("Asus ROG Phone 8");
        productI.setDescription("Gaming smartphone");
        productI.setBrand("Asus");
        productI.setPrice(new BigDecimal("3999.00"));
        productI.setCategory("Smartphone");
        productI.setReleaseAt(LocalDateTime.now().minusMonths(2));
        productI.setAvailable(true);
        productI.setQuantity(35);

        Product productJ = new Product();
        productJ.setName("Lenovo ThinkPad X1 Carbon");
        productJ.setDescription("Business laptop");
        productJ.setBrand("Lenovo");
        productJ.setPrice(new BigDecimal("6499.00"));
        productJ.setCategory("Laptop");
        productJ.setReleaseAt(LocalDateTime.now().minusMonths(11));
        productJ.setAvailable(false);
        productJ.setQuantity(10);


        List<Product> products = List.of(
                productA, productB, productC, productD, productE,
                productF, productG, productH, productI, productJ
        );

        repo.saveAll(products);
        return products.size();
    }
}

