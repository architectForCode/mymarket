# Restful API

## Product

상품 등록 폼 :         /product                        GET
상품 등록 처리 :         /product                       POST
상품 수정 폼 :         /product/{productId}  GET
상품 수정 처리 :         /product/{productId}  POST
상품 삭제 :         /product/{productId}  DELETE
상품 상세 조회 : /product/{productId}  GET
상품 목록 조회 : /product                        GET


## Member

회원 등록 폼 :        /member/save   GET
회원 등록 처리 :    /member/save   POST

주문내역 보기 :     /order                     POST
주문 취소 :            /order                     DELETE
배송지 보기 :        /delivery                 POST
배송지 수정 :        /delivery/update   POST
개인 정보 보기 :    /info                       POST
개인 정보 수정 :    /info/update         POST
회원 탈퇴 :            /info                       DELETE

로그인 폼 :           /login     GET
로그인 처리 :       /login     POST
로그아웃 :           /logout   GET
아이디 찾기 폼 :  /findID   GET
아이디 찾기 처리 : /findID  POST
비밀번호 찾기 :  /findPassword   GET
비밀번호 찾기 처리 :  /findPassword   POST
