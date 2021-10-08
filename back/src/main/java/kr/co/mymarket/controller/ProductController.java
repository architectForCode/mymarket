package kr.co.mymarket.controller;

import kr.co.mymarket.service.ProductService;

public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }
}
