package com.merazmi.ecom.controller;

import com.merazmi.ecom.dtos.ProductResponse;
import com.merazmi.ecom.dtos.ProductSeedingResponse;
import com.merazmi.ecom.dtos.ProductsResponse;
import com.merazmi.ecom.model.Product;
import com.merazmi.ecom.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public ResponseEntity<ProductsResponse> getProduct() {
        List<Product> products = productService.findAll();
        return ResponseEntity.ok(new ProductsResponse("Success", products.size(), products));
    }

    @GetMapping("{id}")
    public ResponseEntity<ProductResponse> getProduct(@PathVariable int id) {
        Optional<Product> product = productService.findById(id);
        return product
                .map(value -> ResponseEntity.ok(new ProductResponse("Success", value)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("seed")
    public ResponseEntity<ProductSeedingResponse> seedProducts() {
        int total = productService.seed();
        return ResponseEntity.ok(new ProductSeedingResponse("Seeding success...", total));
    }
}
