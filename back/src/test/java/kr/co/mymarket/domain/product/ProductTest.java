package kr.co.mymarket.domain.product;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ProductTest {

    @Id
    private Integer productId;
    private String name;
    private Integer price;
    private Integer discountRate;
    private Integer disountedPrice;
    private String unit;
    private Integer weight;
    private Integer deliveryId;
    private String origin;
    private Integer packageId;
    private String info;
    private Integer stock;
    private String description;
    private String certification;

}
