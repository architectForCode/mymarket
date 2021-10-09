package kr.co.mymarket.service;

import kr.co.mymarket.web.dto.ProductDTO;

import java.util.List;

public interface ProductService {
    int save(ProductDTO productDTO);
    int update(ProductDTO productDTO);
    int delete(int productId);
    ProductDTO viewById(int productId);
    List<ProductDTO> viewAll(int page);
}
