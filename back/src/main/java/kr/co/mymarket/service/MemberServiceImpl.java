package kr.co.mymarket.service;

import kr.co.mymarket.web.dto.MemberLoginDto;
import kr.co.mymarket.web.dto.MemberLogoutDto;
import kr.co.mymarket.web.dto.MemberSaveDto;
import kr.co.mymarket.web.dto.MemberUpdateDto;

public class MemberServiceImpl implements MemberService {
    @Override
    public MemberSaveDto save(MemberSaveDto memberSaveDto) {
        return null;
    }

    @Override
    public int update(MemberUpdateDto memberUpdateDto) {
        return 0;
    }

    @Override
    public int delete(int memberId) {
        return 0;
    }

    @Override
    public MemberLoginDto login(MemberLoginDto memberLoginDto) {
        return null;
    }

    @Override
    public MemberLogoutDto logout(MemberLogoutDto memberLogoutDto) {
        return null;
    }

    @Override
    public String findId(String name, String email) {
        return null;
    }

    @Override
    public String findPassword(String name, String id, String email) {
        return null;
    }
}
