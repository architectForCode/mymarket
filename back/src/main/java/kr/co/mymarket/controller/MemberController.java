package kr.co.mymarket.controller;

import kr.co.mymarket.service.MemberService;

public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }
}
