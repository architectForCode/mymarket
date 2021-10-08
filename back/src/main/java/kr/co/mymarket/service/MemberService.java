package kr.co.mymarket.service;

import kr.co.mymarket.web.dto.MemberLoginDto;
import kr.co.mymarket.web.dto.MemberLogoutDto;
import kr.co.mymarket.web.dto.MemberSaveDto;
import kr.co.mymarket.web.dto.MemberUpdateDto;

public interface MemberService {
    MemberSaveDto save(MemberSaveDto memberSaveDto);
    int update(MemberUpdateDto memberUpdateDto);
    int delete(int memberId);
    MemberLoginDto login(MemberLoginDto memberLoginDto);
    MemberLogoutDto logout(MemberLogoutDto memberLogoutDto);
    String findId(String name, String email);
    String findPassword(String name, String id, String email);
}
