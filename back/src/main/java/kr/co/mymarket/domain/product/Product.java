package kr.co.mymarket.domain.product;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-10-08
 * Time: 오후 6:29
 */

@Entity
public class Product
{
    @Id
    int productId;
    String name;
    int price;
    int discountRate;
    int discountedPrice;
    String unit;
    int weight;
    int deliveryId;
    String origin;
    int pacakgeId;
    String info;
    int stock;
    String description;
    String certification;
}
