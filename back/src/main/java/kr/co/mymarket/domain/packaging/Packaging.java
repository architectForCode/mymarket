package kr.co.mymarket.domain.packaging;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-10-08
 * Time: 오후 6:39
 */

@Entity
public class Packaging
{
    @Id
    int packagingId;
    String packagingName;
}
