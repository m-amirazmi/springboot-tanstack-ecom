package com.merazmi.ecom.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String name;

    private String description;

    @Column(nullable = false)
    private String brand;

    @Column(nullable = false)
    private BigDecimal price;

    private String category;

    @CreationTimestamp
    private LocalDateTime releaseAt;

    private boolean isAvailable = true;

    private int quantity = 0;
}
