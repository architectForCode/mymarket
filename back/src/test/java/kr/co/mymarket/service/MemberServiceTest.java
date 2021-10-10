package kr.co.mymarket.service;

import kr.co.mymarket.web.dto.MemberDTOTest;

public interface MemberServiceTest {
    MemberDTOTest save(MemberDTOTest memberSaveDTO);
    Integer update(MemberDTOTest memberUpdateDTO);
    Integer delete(Integer memberId);
    MemberDTOTest login(MemberDTOTest memberLoginDTO);
    MemberDTOTest logout(MemberDTOTest memberLogoutDTO);
    String findId(String name, String email);
    String findPassword(String name, String id, String email);

}

