package kr.co.mymarket.service;

import kr.co.mymarket.domain.product.ProductRepositoryTest;
import kr.co.mymarket.web.dto.ProductDTOTest;

import java.util.List;

public class ProductServiceImplTest implements ProductServiceTest{
    private final ProductRepositoryTest productRepository;

    public ProductServiceImplTest(ProductRepositoryTest productRepository){
        this.productRepository = productRepository;
    }
    @Override
    public Integer save(ProductDTOTest productDTO) {
        return null;
    }

    @Override
    public Integer update(ProductDTOTest productDTO) {
        return null;
    }

    @Override
    public Integer delete(Integer productId) {
        return null;
    }

    @Override
    public ProductDTOTest viewById(Integer productId) {
        return null;
    }

    @Override
    public List<ProductDTOTest> viewAll(Integer page) {
        return null;
    }
}
