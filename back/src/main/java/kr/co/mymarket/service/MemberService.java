package kr.co.mymarket.service;

import kr.co.mymarket.web.dto.MemberDTO;

public interface MemberService {
    MemberDTO save(MemberDTO memberSaveDto);
    int update(MemberDTO memberUpdateDto);
    int delete(int memberId);
    MemberDTO login(MemberDTO memberLoginDto);
    MemberDTO logout(MemberDTO memberLogoutDto);
    String findId(String name, String email);
    String findPassword(String name, String id, String email);
}
