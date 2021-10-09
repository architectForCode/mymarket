package kr.co.mymarket.service;

import kr.co.mymarket.domain.product.ProductRepository;
import kr.co.mymarket.web.dto.ProductDTO;

import java.util.List;

public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public int save(ProductDTO productDTO) {
        return 0;
    }

    @Override
    public int update(ProductDTO productDTO) {
        return 0;
    }

    @Override
    public int delete(int productId) {
        return 0;
    }

    @Override
    public ProductDTO viewById(int productId) {
        return null;
    }

    @Override
    public List<ProductDTO> viewAll(int page) {
        return null;
    }
}
