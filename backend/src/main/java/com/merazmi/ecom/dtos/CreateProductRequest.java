package com.merazmi.ecom.dtos;

import java.math.BigDecimal;

public record CreateProductRequest(
        String name,
        String description,
        String brand,
        BigDecimal price,
        String category,
        Boolean isAvailable,
        Integer quantity
) {
}
