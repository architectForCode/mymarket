package kr.co.mymarket.domain.packaging;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class PackagingTest {

    @Id
    private Integer packagingId;
    private String packagingName;

}
