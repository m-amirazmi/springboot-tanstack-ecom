package com.merazmi.ecom.dtos;

import com.merazmi.ecom.model.Product;

public record ProductResponse(String message, Product product) {
}
