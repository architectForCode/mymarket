package kr.co.mymarket.service;

import kr.co.mymarket.domain.member.MemberRepositoryTest;
import kr.co.mymarket.web.dto.MemberDTOTest;

public class MemberServiceImplTest implements MemberServiceTest{
    private final MemberRepositoryTest memberRepository;

    public MemberServiceImplTest(MemberRepositoryTest memberRepository){
        this.memberRepository = memberRepository;
    }

    @Override
    public MemberDTOTest save(MemberDTOTest memberSaveDTO) {
        return null;
    }

    @Override
    public Integer update(MemberDTOTest memberUpdateDTO) {
        return null;
    }

    @Override
    public Integer delete(Integer memberId) {
        return null;
    }

    @Override
    public MemberDTOTest login(MemberDTOTest memberLoginDTO) {
        return null;
    }

    @Override
    public MemberDTOTest logout(MemberDTOTest memberLogoutDTO) {
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
