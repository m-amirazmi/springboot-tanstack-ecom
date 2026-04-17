package com.merazmi.ecom.dtos;

import com.merazmi.ecom.model.Product;

import java.util.List;

public record ProductsResponse(String message, int total, List<Product> products) {
}
