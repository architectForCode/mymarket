import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import next, { NextPage } from "next";
import styled from "styled-components";
import Nav from "../../components/Nav";
import React, { useRef } from "react";
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
  const { register, handleSubmit } = useForm();
  const passwordRef = useRef<HTMLInputElement>(null);
  const againRef = useRef<HTMLInputElement>(null);
  const checkBox = useRef<HTMLDivElement>(null);
  const AllBox = useRef<HTMLDivElement>(null);
  const onSubmit = (data: any) => {
    console.log(data);
    console.log(passwordRef.current!.value);
    // ???????????? ????????? ????????? ???????????? ????????? ??????.
  };

  const onIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, nextElementSibling, id } = e.currentTarget;
    const conditions = nextElementSibling!.childNodes;

    if (id === "id") {
      let sw = true;
      let stack = [];
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
      } else {
        (conditions[0] as HTMLElement).style.color = "red";
      }
    } else if (id === "password") {
      let stack = [];
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

        //2?????? ?????? ??????
        const set = new Set(stack);
        if (set.size >= 2 && !set.has("else")) {
          (conditions[1] as HTMLElement).style.color = "green";
        } else {
          (conditions[1] as HTMLElement).style.color = "red";
        }

        //3?????? ?????? ??????
        if (sameNumCount >= 3)
          (conditions[2] as HTMLElement).style.color = "red";
        else (conditions[2] as HTMLElement).style.color = "green";
      } else {
        (conditions[0] as HTMLElement).style.color = "red";
      }
    } else {
      if (passwordRef.current) {
        const password = passwordRef.current.value;
        if (password === value) {
          (conditions[0] as HTMLElement).style.color = "green";
        } else {
          (conditions[0] as HTMLElement).style.color = "red";
        }
      }
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
          <h1 className="main__title">????????????</h1>
          <GridWrapper onSubmit={handleSubmit(onSubmit)}>
            <div className="grid__first">
              <span>*</span>??????????????????
            </div>
            <div className="grid__second">
              <section>
                <h1>
                  ?????????<span>*</span>
                </h1>
                <div className="input__info">
                  <input
                    type="text"
                    id="id"
                    placeholder="6??? ????????? ?????? ?????? ????????? ????????? ??????"
                    {...register("id")}
                    // onClick={onInputClick("id")}
                    onFocus={onInputClick}
                    onChange={onIdChange}
                  />
                  <ul className="inputUl">
                    <li>6??? ????????? ?????? ?????? ????????? ????????? ??????</li>
                    <li>????????? ????????????</li>
                  </ul>
                </div>
                <button type="button">????????????</button>
              </section>
              <section>
                <h1>
                  ????????????<span>*</span>
                </h1>
                <div className="input__info">
                  <input
                    type="password"
                    id="password"
                    placeholder="??????????????? ??????????????????"
                    {...register("password")}
                    ref={passwordRef}
                    onFocus={onInputClick}
                    onChange={onIdChange}
                  />
                  <ul className="inputUl">
                    <li>10??? ????????????</li>
                    <li>
                      ??????/??????/????????????(?????? ??????)??? ????????????,2??? ????????????
                    </li>
                    <li>????????? ?????? 3??? ?????? ???????????? ??????</li>
                  </ul>
                </div>
              </section>
              <section>
                <h1>
                  ??????????????????<span>*</span>
                </h1>
                <div className="input__info">
                  <input
                    type="password"
                    id="again"
                    placeholder="??????????????? ?????? ?????????????????????"
                    {...register("passwordAgain")}
                    ref={againRef}
                    onFocus={onInputClick}
                    onChange={onIdChange}
                  />
                  <ul className="inputUl">
                    <li>????????? ??????????????? ??????????????????</li>
                  </ul>
                </div>
              </section>
              <section>
                <h1>
                  ??????<span>*</span>
                </h1>
                <input
                  type="text"
                  placeholder="????????? ??????????????????"
                  {...register("name")}
                />
              </section>
              <section>
                <h1>
                  ?????????<span>*</span>
                </h1>
                <input
                  type="email"
                  placeholder="???:marketkurly@kurly.com"
                  {...register("email")}
                />
                <button type="button">????????????</button>
              </section>
              <section>
                <h1>
                  ?????????<span>*</span>
                </h1>
                <input
                  type="text"
                  placeholder="????????? ??????????????????"
                  {...register("phone")}
                />
                <button type="button" className="origin">
                  ???????????? ??????
                </button>
              </section>
              <section className="second__where">
                <h1>
                  ??????<span>*</span>
                </h1>
                <div className="where__info">
                  <button type="button">
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    ????????????
                  </button>
                  <div>???????????? ?????? ?????? ????????? ????????? ??? ????????????.</div>
                </div>
              </section>
              <section className="second__gender">
                <h1>??????</h1>
                <div className="gender__info" ref={checkBox}>
                  <label>
                    <input
                      type="checkbox"
                      name="gender"
                      value="man"
                      onClick={onCheckBoxClick}
                    ></input>
                    ??????
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="gender"
                      value="girl"
                      onClick={onCheckBoxClick}
                    ></input>
                    ??????
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="gender"
                      value="no"
                      onClick={onCheckBoxClick}
                    ></input>
                    ????????????
                  </label>
                </div>
              </section>
              <section className="second__birth">
                <h1>????????????</h1>
                <div className="birth__info">
                  <input type="text" placeholder="YYYY" {...register("year")} />
                  <span>/</span>
                  <input type="text" placeholder="MM" {...register("month")} />
                  <span>/</span>
                  <input type="text" placeholder="DD" {...register("day")} />
                </div>
              </section>
              <section className="second__extra">
                <h1>??????????????????</h1>
                <div className="extra__info">
                  <div className="info__inputs">
                    <label>
                      <input type="checkbox" name="recommendId"></input>?????????
                      ?????????
                    </label>
                    <label>
                      <input type="checkbox" name="recommendEvent"></input>??????
                      ????????????
                    </label>
                  </div>
                  <div className="info__toggle">
                    <input type="text"></input>
                    <p>
                      ????????? ???????????? ?????? ???????????? ??? ????????? ?????? ???????????????.
                      <br></br>
                      ?????? ??????, ????????? ???????????????.
                      <br></br>
                      ???????????? ??? ??????????????? ??????????????????.
                    </p>
                  </div>
                </div>
              </section>
            </div>
            <div className="grid__third">
              <section>
                <h1 className="third__title">
                  ??????????????????<span>*</span>
                </h1>
                <div className="third__info" ref={AllBox}>
                  <label className="info__All">
                    <input type="checkbox" onClick={onAgreeCheckClick} />
                    <div>
                      <h3>?????? ???????????????.</h3>
                      ??????????????? ???????????? ?????? ????????? ???????????? ??? ????????????
                      ???????????? ????????? ??? ????????????.
                    </div>
                  </label>
                  <label>
                    <input type="checkbox" {...register("agreeOne")} />
                    ???????????? ??????<span>(??????)</span>
                  </label>
                  <label>
                    <input type="checkbox" {...register("agreeTwo")} />
                    ???????????? ??????????????? ??????<span>(??????)</span>
                  </label>
                  <label>
                    <input type="checkbox" {...register("agreeThree")} />
                    ???????????? ??????????????? ??????<span>(??????)</span>
                  </label>
                  <label>
                    <input type="checkbox" {...register("agreeFour")} />
                    ????????????,???????????? ??? ??????/?????? ?????? ??????<span>(??????)</span>
                  </label>
                  <label>
                    <input type="checkbox" {...register("agreeFive")} />
                    ????????? ??? 14??? ???????????????.<span>(??????)</span>
                  </label>
                </div>
              </section>
            </div>
            <SubmitButton>????????????</SubmitButton>
          </GridWrapper>
        </FormWrapper>
        <Message message={"test"} />
      </SignWrapper>
    </>
  );
};

export default SignUp;
