package kr.co.mymarket.domain.rank;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-10-08
 * Time: 오후 6:28
 */

@Entity
public class Rank
{
    @Id
    int rankId;
    String rankName;
}
