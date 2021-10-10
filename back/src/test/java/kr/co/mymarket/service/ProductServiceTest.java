package kr.co.mymarket.service;

import kr.co.mymarket.web.dto.ProductDTOTest;

import java.util.List;

public interface ProductServiceTest {
    Integer save(ProductDTOTest productDTO);
    Integer update(ProductDTOTest productDTO);
    Integer delete(Integer productId);
    ProductDTOTest viewById(Integer productId);
    List<ProductDTOTest> viewAll(Integer page);
}
