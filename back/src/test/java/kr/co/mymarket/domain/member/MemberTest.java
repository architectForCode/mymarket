package kr.co.mymarket.domain.member;

import kr.co.mymarket.domain.rank.RankTest;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class MemberTest {

    @Id
    private Integer memberId;
    private String id;
    private String password;
    private Integer rankId;
    private String name;
    private String email;
    private String phone;
    private String address;
    private String gender;
    private String birth;
    private LocalDateTime registerDate;
    private LocalDateTime expireDate;
    private Integer point;



}
