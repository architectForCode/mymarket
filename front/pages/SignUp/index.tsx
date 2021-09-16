import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import next, { NextPage } from "next";
import styled from "styled-components";
import Nav from "../../components/common/Nav/Nav";
import React, { useRef, useState } from "react";
import Message from "../../components/Message";

const SignWrapper = styled.div`
  width: 100%;
`;

const FormWrapper = styled.div`
  h1.main__title {
    text-align: center;
    font-size: 1.7rem;
    padding: 3rem;
  }
`;
const GridWrapper = styled.form`
  width: 50%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 40px 1fr 65vh 200px;
  h1 {
    span {
      color: red;
    }
  }
  .grid__first {
    border-bottom: 2px solid black;

    font-size: 0.75rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    span {
      color: red;
    }
  }
  div.grid__second,
  div.grid__third {
    padding: 10px;
    padding-top: 30px;
    border-bottom: 2px solid black;
    .input__info {
      ul {
        display: none;
        font-size: 0.8rem;
        padding: 10px;
        li {
          margin-bottom: 5px;
        }
      }
    }
    section {
      display: grid;
      gap: 10px;
      grid-template-columns: 19% 59% 19%;
      margin-bottom: 1.5rem;
      align-items: flex-start;
      h1 {
        padding-top: 17px;
      }
      input {
        width: 100%;
        height: 45px;
        border: 1px solid #cccccc;
        border-radius: 4px;
        padding: 0 15px;
        &::-webkit-input-placeholder {
          color: #cccccc;
          font-weight: 500;
          font-size: 15px;
        }
      }
      button {
        border: 1px solid #5f0080;
        border-radius: 4px;
        font-weight: 600;
        color: #5f0080;
        height: 45px;
      }
      button.origin {
        border: 1px solid #cccccc;
        color: #cccccc;
      }
    }
    section.second__where {
      div.where__info {
        width: 100%;
        button {
          width: 100%;
          margin-bottom: 10px;
        }
        div {
          font-size: 0.8rem;
          color: gray;
        }
      }
    }
    section.second__gender {
      div.gender__info {
        display: flex;
        justify-content: space-between;
        label {
          display: flex;
          align-items: center;
          width: 35%;
          input {
            width: 30px;
            height: 30px;
            margin-right: 10px;
          }
        }
      }
    }

    section.second__birth {
      div.birth__info {
        display: flex;
        border: 1px solid #cccccc;
        color: #cccccc;
        border-radius: 4px;
        align-items: center;
        span {
          padding-bottom: 5px;
        }
        input {
          border: none;
          text-align: center;
          &::-webkit-input-placeholder {
            text-align: center;
          }
        }
      }
    }

    section.second__extra {
      div.extra__info {
        .info__inputs {
          display: flex;
          justify-content: space-between;
          label {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 50%;
            input {
              width: 30px;
              height: 30px;
              margin-right: 10px;
            }
          }
        }
        .info__toggle {
          input {
            margin-bottom: 10px;
          }
          p {
            font-size: 0.8rem;
            color: gray;
            line-height: 1.3;
          }
        }
      }
    }
  }

  div.grid__third {
    border-bottom: 1px solid #cccccc;
    height: 65vh;
    section {
      display: grid;
      gap: 10px;
      grid-template-columns: 19% 79%;
      margin-bottom: 1.5rem;
      align-items: center;
      .third__title {
        align-self: start;
      }
    }
    label {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      color: #4c4c4c;
      input {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
    }
    label.info__All {
      font-size: 0.7rem;
      h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
        font-weight: 600;
      }
    }
  }
`;

const SubmitButton = styled.button`
  width: 20rem;
  height: 4rem;
  background-color: #5f0080;
  border-radius: 5px;
  color: white;
  margin: 30px auto;
  font-size: 1.5rem;
`;

const SignUp: NextPage = () => {
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);
  const { register, handleSubmit } = useForm();
  const tester = useRef({
    id: false,
    password: false,
    again: false,
  });
  const passwordRef = useRef<HTMLInputElement>(null);
  const againRef = useRef<HTMLInputElement>(null);
  const checkBox = useRef<HTMLDivElement>(null);
  const AllBox = useRef<HTMLDivElement>(null);

  const submitTester = (data: any): string => {
    const { id, password, again } = tester.current;

    if (!id || !data.id) {
      return "아이디를 입력해주세요";
    } else if (!password || !passwordRef.current!.value) {
      return "비밀번호를 입력해주세요";
    } else if (!again || !againRef.current!.value) {
      return "비밀번호를 입력해주세요";
    } else if (!data.name) {
      return "이름을 입력해주세요";
    } else if (!data.email) {
      return "이메일을 입력해주세요";
    } else if (!data.phone) {
      return "전화번호를 입력해주세요";
    } else if (!data.one || !data.two || !data.five) {
      return "필수 이용약관에 동의해주세요";
    } else {
      return "";
    }
  };

  const onSubmit = (data: any) => {
    const result = submitTester(data);
    if (result) {
      setMessage(result);
      setModal(true);
    } else {
      // api 호출
    }
  };

  const idTester = (
    value: string,
    conditions: NodeListOf<ChildNode>
  ): boolean => {
    let sw = true;
    let stack = [];
    let testerResult = false;
    if (value.length >= 6) {
      for (let i = 0; i < value.length; i++) {
        if (/[0-9]/.test(value[i]) || /[a-zA-Z]/.test(value[i])) {
          const stackItem = /[0-9]/.test(value[i]) ? "number" : "string";
          stack.push(stackItem);
        } else {
          sw = false;
        }

        if (i === value.length - 1) {
          const set = new Set(stack);
          if (set.size === 1 && set.has("number")) sw = false;
        }
      }
      sw
        ? ((conditions[0] as HTMLElement).style.color = "green")
        : ((conditions[0] as HTMLElement).style.color = "red");
      sw ? (testerResult = true) : (testerResult = false);
    } else {
      (conditions[0] as HTMLElement).style.color = "red";
      testerResult = false;
    }
    return testerResult;
  };

  const passwordTester = (
    value: string,
    conditions: NodeListOf<ChildNode>
  ): boolean => {
    let stack = [];
    let testerResult = [false, false, false];
    let prevNum = "a";
    let sameNumCount = 0;

    if (againRef.current) {
      const passwordAgain = againRef.current.value;
      const againCondition = againRef.current.nextElementSibling?.firstChild;
      if (passwordAgain === value) {
        (againCondition as HTMLElement).style.color = "green";
      } else {
        (againCondition as HTMLElement).style.color = "red";
      }
    }

    if (value.length >= 10) {
      (conditions[0] as HTMLElement).style.color = "green";
      testerResult[0] = true;
      for (let i = 0; i < value.length; i++) {
        if (/[0-9]/.test(value[i])) {
          stack.push("number");
          if (prevNum === "a") sameNumCount = 1;
          else if (prevNum === value[i]) sameNumCount += 1;
          prevNum = value[i];
          continue;
        } else if (/[a-zA-Z]/.test(value[i])) {
          stack.push("english");
        } else if (/[~!@#$%^&*()_+|<>?:{}]/.test(value[i])) {
          stack.push("special");
        } else {
          stack.push("else");
        }
        prevNum = "a";
        sameNumCount = 0;
      }

      //2번째 조건 판단
      const set = new Set(stack);
      if (set.size >= 2 && !set.has("else")) {
        (conditions[1] as HTMLElement).style.color = "green";
        testerResult[1] = true;
      } else {
        (conditions[1] as HTMLElement).style.color = "red";
        testerResult[1] = false;
      }

      //3번째 조건 판단
      if (sameNumCount >= 3) {
        (conditions[2] as HTMLElement).style.color = "red";
        testerResult[2] = false;
      } else {
        (conditions[2] as HTMLElement).style.color = "green";
        testerResult[2] = true;
      }
    } else {
      (conditions[0] as HTMLElement).style.color = "red";
      testerResult[0] = false;
    }
    console.log(testerResult);
    return !testerResult.includes(false);
  };

  const passwordAgainTester = (
    value: string,
    conditions: NodeListOf<ChildNode>
  ): boolean => {
    let testerResult = false;
    if (passwordRef.current) {
      const password = passwordRef.current.value;
      if (password === value) {
        (conditions[0] as HTMLElement).style.color = "green";
        testerResult = true;
      } else {
        (conditions[0] as HTMLElement).style.color = "red";
        testerResult = false;
      }
    }

    return testerResult;
  };

  const onIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, nextElementSibling, id } = e.currentTarget;
    const conditions = nextElementSibling!.childNodes;

    if (id === "id") {
      // idTester(value, conditions);
      tester.current = { ...tester.current, id: idTester(value, conditions) };
    } else if (id === "password") {
      tester.current = {
        ...tester.current,
        password: passwordTester(value, conditions),
      };
    } else {
      tester.current = {
        ...tester.current,
        again: passwordAgainTester(value, conditions),
      };
    }
  };

  const onInputClick = (e: React.FocusEvent<HTMLInputElement>) => {
    const { nextElementSibling } = e.currentTarget;
    (nextElementSibling as HTMLElement).style.display = "block";
  };

  const onCheckBoxClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (checkBox.current) {
      let boxes = checkBox.current.childNodes;
      if ((e.currentTarget as HTMLInputElement).checked) {
        boxes.forEach((item) => {
          if (item.firstChild === e.currentTarget) {
            (item.firstChild as HTMLInputElement).checked = true;
          } else {
            (item.firstChild as HTMLInputElement).checked = false;
          }
        });
      } else {
        (e.currentTarget as HTMLInputElement).checked = true;
      }
    }
  };

  const onAgreeCheckClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const boxes = (AllBox.current as HTMLElement).childNodes;
    if ((e.currentTarget as HTMLInputElement).checked) {
      boxes.forEach(
        (item) => ((item.firstChild as HTMLInputElement).checked = true)
      );
    } else {
      boxes.forEach(
        (item) => ((item.firstChild as HTMLInputElement).checked = false)
      );
    }
  };

  return (
    <>
      <Nav />
      <SignWrapper>
        <FormWrapper>
          <h1 className="main__title">회원가입</h1>
          <GridWrapper onSubmit={handleSubmit(onSubmit)}>
            <div className="grid__first">
              <span>*</span>필수입력사항
            </div>
            <div className="grid__second">
              <section>
                <h1>
                  아이디<span>*</span>
                </h1>
                <div className="input__info">
                  <input
                    type="text"
                    id="id"
                    placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                    {...register("id")}
                    // onClick={onInputClick("id")}
                    onFocus={onInputClick}
                    onChange={onIdChange}
                  />
                  <ul className="inputUl">
                    <li>6자 이상의 영문 혹은 영문과 숫자를 조합</li>
                    <li>아이디 중복확인</li>
                  </ul>
                </div>
                <button type="button">중복확인</button>
              </section>
              <section>
                <h1>
                  비밀번호<span>*</span>
                </h1>
                <div className="input__info">
                  <input
                    type="password"
                    id="password"
                    placeholder="비밀번호를 입력해주세요"
                    {...register("password")}
                    ref={passwordRef}
                    onFocus={onInputClick}
                    onChange={onIdChange}
                  />
                  <ul className="inputUl">
                    <li>10자 이상입력</li>
                    <li>
                      영문/숫자/특수문자(공백 제외)만 허용하며,2개 이상조합
                    </li>
                    <li>동일한 숫자 3개 이상 연속사용 불가</li>
                  </ul>
                </div>
              </section>
              <section>
                <h1>
                  비밀번호확인<span>*</span>
                </h1>
                <div className="input__info">
                  <input
                    type="password"
                    id="again"
                    placeholder="비밀번호를 한번 더입력해주세요"
                    {...register("passwordAgain")}
                    ref={againRef}
                    onFocus={onInputClick}
                    onChange={onIdChange}
                  />
                  <ul className="inputUl">
                    <li>동일한 비밀번호를 입력해주세요</li>
                  </ul>
                </div>
              </section>
              <section>
                <h1>
                  이름<span>*</span>
                </h1>
                <input
                  type="text"
                  placeholder="이름을 입력해주세요"
                  {...register("name")}
                />
              </section>
              <section>
                <h1>
                  이메일<span>*</span>
                </h1>
                <input
                  type="email"
                  placeholder="예:marketkurly@kurly.com"
                  {...register("email")}
                />
                <button type="button">중복확인</button>
              </section>
              <section>
                <h1>
                  휴대폰<span>*</span>
                </h1>
                <input
                  type="text"
                  placeholder="숫자만 입력해주세요"
                  {...register("phone")}
                />
                <button type="button" className="origin">
                  인증번호 받기
                </button>
              </section>
              <section className="second__where">
                <h1>
                  주소<span>*</span>
                </h1>
                <div className="where__info">
                  <button type="button">
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    주소검색
                  </button>
                  <div>배송지에 따라 상품 정보가 달라질 수 있습니다.</div>
                </div>
              </section>
              <section className="second__gender">
                <h1>성별</h1>
                <div className="gender__info" ref={checkBox}>
                  <label>
                    <input
                      type="checkbox"
                      name="gender"
                      value="man"
                      onClick={onCheckBoxClick}
                    ></input>
                    남자
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="gender"
                      value="girl"
                      onClick={onCheckBoxClick}
                    ></input>
                    여자
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="gender"
                      value="no"
                      onClick={onCheckBoxClick}
                    ></input>
                    선택안함
                  </label>
                </div>
              </section>
              <section className="second__birth">
                <h1>생년원일</h1>
                <div className="birth__info">
                  <input type="text" placeholder="YYYY" {...register("year")} />
                  <span>/</span>
                  <input type="text" placeholder="MM" {...register("month")} />
                  <span>/</span>
                  <input type="text" placeholder="DD" {...register("day")} />
                </div>
              </section>
              <section className="second__extra">
                <h1>추가입력사항</h1>
                <div className="extra__info">
                  <div className="info__inputs">
                    <label>
                      <input type="checkbox" name="recommendId"></input>추천인
                      아이디
                    </label>
                    <label>
                      <input type="checkbox" name="recommendEvent"></input>참여
                      이벤트명
                    </label>
                  </div>
                  <div className="info__toggle">
                    <input type="text"></input>
                    <p>
                      추천인 아이디와 참여 이벤트명 중 하나만 선택 가능합니다.
                      <br></br>
                      가입 이후, 수정이 불가합니다.
                      <br></br>
                      대소문자 및 띄어쓰기에 유의해주세요.
                    </p>
                  </div>
                </div>
              </section>
            </div>
            <div className="grid__third">
              <section>
                <h1 className="third__title">
                  이용약관동의<span>*</span>
                </h1>
                <div className="third__info" ref={AllBox}>
                  <label className="info__All">
                    <input type="checkbox" onClick={onAgreeCheckClick} />
                    <div>
                      <h3>전체 동의합니다.</h3>
                      선택항목에 동의하지 않은 경우도 회원가입 및 일반적인
                      서비스를 이용할 수 있습니다.
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" {...register("one")} />
                    이용약관 동의<span>(필수)</span>
                  </label>
                  <label>
                    <input type="checkbox" {...register("two")} />
                    개인정보 수집•이용 동의<span>(필수)</span>
                  </label>
                  <label>
                    <input type="checkbox" {...register("three")} />
                    개인정보 수집•이용 동의<span>(선택)</span>
                  </label>
                  <label>
                    <input type="checkbox" {...register("four")} />
                    무료배송,할인쿠폰 등 혜택/정보 수신 동의<span>(선택)</span>
                  </label>
                  <label>
                    <input type="checkbox" {...register("five")} />
                    본인은 만 14세 이상입니다.<span>(필수)</span>
                  </label>
                </div>
              </section>
            </div>
            <SubmitButton>가입하기</SubmitButton>
          </GridWrapper>
        </FormWrapper>
        {message && modal && <Message message={message} setModal={setModal} />}
      </SignWrapper>
    </>
  );
};

export default SignUp;
