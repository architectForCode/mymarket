package kr.co.mymarket.domain.product;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-10-08
 * Time: 오후 6:29
 */

public interface ProductRepository extends JpaRepository<Product, Integer>
{
}
