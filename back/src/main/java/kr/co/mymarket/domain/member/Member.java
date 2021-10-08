package kr.co.mymarket.domain.member;

import kr.co.mymarket.domain.rank.Rank;
import lombok.Getter;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDateTime;

/**
 * Created by WOOSERK.
 * User: WOOSERK
 * Date: 2021-10-08
 * Time: 오후 6:25
 */

@Getter
@Entity
public class Member
{
    @Id
    int memberId;
    String id;
    String password;
    int rankId;
    String name;
    String email;
    String phone;
    String address;
    String gender;
    String birth;
    LocalDateTime registerDate;
    LocalDateTime expireDate;
    int point;
}
