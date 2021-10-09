package kr.co.mymarket.service;

import kr.co.mymarket.domain.member.MemberRepository;
import kr.co.mymarket.web.dto.MemberDTO;

public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;

    public MemberServiceImpl(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Override
    public MemberDTO save(MemberDTO memberSaveDto) {
        return null;
    }

    @Override
    public int update(MemberDTO memberUpdateDto) {
        return 0;
    }

    @Override
    public int delete(int memberId) {
        return 0;
    }

    @Override
    public MemberDTO login(MemberDTO memberLoginDto) {
        return null;
    }

    @Override
    public MemberDTO logout(MemberDTO memberLogoutDto) {
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
