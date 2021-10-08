package kr.co.mymarket.domain.delivery;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class DeliveryTest {

    @Id
    private Integer deliveryId;
    private String deliveryName;

}
