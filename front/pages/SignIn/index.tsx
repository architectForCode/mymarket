import styled from "styled-components";
import Nav from "../../components/Nav";

const SignInWrapper = styled.div`
  width: 100%;
  height: 70vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    text-align: center;
    font-size: 1.7rem;
    padding: 3rem;
  }
`;

const FormWrapper = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;
  width: 338px;
  input {
    height: 50px;
    border: 1px solid #cccccc;
    border-radius: 3px;
    padding-left: 20px;
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
  button {
    height: 50px;
    border-radius: 3px;
    margin-bottom: 10px;
  }
  button.SignIn {
    background-color: #5f0080;
    color: white;
    font-size: 1rem;
    font-weight: 600;
  }
  button.SignUp {
    border: 1px solid #5f0080;
    color: #5f0080;
    font-weight: 600;
    font-size: 1rem;
  }
`;
const SignIn = () => {
  return (
    <>
      <Nav />
      <SignInWrapper>
        <h1>로그인</h1>
        <FormWrapper>
          <input type="text" placeholder="아이디를 입력해주세요" />
          <input type="password" placeholder="비밀번호를 입력해주세요" />
          <button className="SignIn">로그인</button>
          <button className="SignUp">회원가입</button>
        </FormWrapper>
      </SignInWrapper>
    </>
  );
};

export default SignIn;
