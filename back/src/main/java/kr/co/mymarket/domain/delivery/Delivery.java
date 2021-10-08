package kr.co.mymarket.domain.delivery;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-10-08
 * Time: 오후 6:33
 */

@Entity
public class Delivery
{
    @Id
    int deliveryId;
    String deliveryName;
}
