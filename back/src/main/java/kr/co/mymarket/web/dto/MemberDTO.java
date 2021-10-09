package kr.co.mymarket.web.dto;

import java.time.LocalDateTime;

public class MemberDTO {
    private int memberId;
    private String id;
    private String password;
    private int rankId;
    private String name;
    private String email;
    private String phone;
    private String address;
    private String gender;
    private String birth;
    private LocalDateTime registerDate;
    private LocalDateTime expireDate;
    private int point;

    public MemberDTO(int memberId, String id, String password, int rankId, String name, String email, String phone, String address, String gender, String birth, LocalDateTime registerDate, LocalDateTime expireDate, int point) {
        this.memberId = memberId;
        this.id = id;
        this.password = password;
        this.rankId = rankId;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.gender = gender;
        this.birth = birth;
        this.registerDate = registerDate;
        this.expireDate = expireDate;
        this.point = point;
    }

    public int getMemberId() {
        return memberId;
    }

    public void setMemberId(int memberId) {
        this.memberId = memberId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getRankId() {
        return rankId;
    }

    public void setRankId(int rankId) {
        this.rankId = rankId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBirth() {
        return birth;
    }

    public void setBirth(String birth) {
        this.birth = birth;
    }

    public LocalDateTime getRegisterDate() {
        return registerDate;
    }

    public void setRegisterDate(LocalDateTime registerDate) {
        this.registerDate = registerDate;
    }

    public LocalDateTime getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(LocalDateTime expireDate) {
        this.expireDate = expireDate;
    }

    public int getPoint() {
        return point;
    }

    public void setPoint(int point) {
        this.point = point;
    }
}
