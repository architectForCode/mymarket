import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMapMarkerAlt,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import Category from "./Category";

const NavWrapper = styled.div`
  width: 100%;
  height: 175px;
  box-shadow: 0px 1px 10px rgba(1, 1, 1, 0.1);
`;
const NavInWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
`;

const LinkWrapper = styled.div`
  height: 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr) 3fr;
  align-items: center;
  justify-items: center;
  background-color: white;
  div.Icon {
    height: 120%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  a.Icon,
  div.Icon {
    width: 100%;
    span {
      width: 100%;
      font-size: 1.5rem;
      margin-right: 12px;
    }
  }
  a.Icon:nth-child(1),
  div.Icon:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      width: 20px;
    }
  }

  .linkWrapper__Side {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    form {
      margin-right: 1rem;
    }
    a {
      text-align: end;
    }
  }
  .Side__searchForm {
    position: relative;
    input {
      width: 13rem;
      height: 35px;
      border: none;
      outline: none;
      background-color: #f7f7f7;
      border-radius: 12px;
      padding: 15px;
    }
    span {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-items: center;
  height: 120px;
  padding: 10px;
  .header__info {
    font-size: 0.8rem;
    font-weight: 600;
    padding: 3px;
    border-radius: 10px;
    color: gray;
    border: 1px solid gray;
    height: 1.5rem;
    justify-self: start;
    display: flex;
    align-items: center;
    span {
      color: purple;
      margin-right: 5px;
    }
  }
  .header__auth {
    font-size: 0.8rem;
    height: 1.5rem;
    justify-self: end;
    a {
      margin-right: 3px;
      &:nth-child(2) {
        margin: 0 8px;
        span {
          margin: 0 8px;
        }
      }
    }
  }
`;
const Nav: NextPage = () => {
  const HeaderRef = useRef<HTMLDivElement>(null);
  const NavRef = useRef<HTMLDivElement>(null);
  const [category, setCategory] = useState(false);

  const categoryHover = () => {
    setCategory(true);
  };

  const categoryMouseOut = () => {
    setCategory(false);
  };

  const FixLinkWrapper = () => {
    if (HeaderRef.current && NavRef.current && window.scrollY > 110) {
      HeaderRef.current.style.display = "none";
      NavRef.current.style.position = "fixed";
      NavRef.current.style.height = "50px";
    } else if (HeaderRef.current && NavRef.current && window.scrollY <= 110) {
      HeaderRef.current.style.display = "grid";
      NavRef.current.style.position = "";
      NavRef.current.style.height = "175px";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => FixLinkWrapper());
    return window.removeEventListener("scroll", () => FixLinkWrapper());
  }, []);
  return (
    <NavWrapper ref={NavRef}>
      <NavInWrapper>
        <Header ref={HeaderRef}>
          <div className="header__info">
            <span>샛별,택배</span>배송안내
          </div>
          <Image
            src="/images/logo.jpg"
            alt="logo"
            width={200}
            height={200}
          ></Image>
          <div className="header__auth">
            <Link href="/SignUp">
              <a>회원가입</a>
            </Link>

            <Link href="/SignIn">
              <a>
                |<span>로그인</span>|
              </a>
            </Link>
            <Link href="/">
              <a>고객센터</a>
            </Link>
          </div>
        </Header>
        <LinkWrapper>
          <div
            className="Icon"
            onMouseEnter={categoryHover}
            onMouseLeave={categoryMouseOut}
          >
            <span>
              <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </span>
            전체카테고리
          </div>

          <Link href="/">
            <a>신상품</a>
          </Link>
          <Link href="/">
            <a>베스트</a>
          </Link>
          <Link href="/">
            <a>알뜰쇼핑</a>
          </Link>
          <Link href="/">
            <a>특가/혜택</a>
          </Link>
          <div className="linkWrapper__Side">
            <form className="Side__searchForm">
              <input type="text" placeholder="검색어를 입력해주세요" />
              <span>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
              </span>
            </form>
            <Link href="/">
              <a className="Icon">
                <span>
                  <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                </span>
              </a>
            </Link>
            <Link href="/Cart">
              <a className="Icon">
                <span>
                  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </span>
              </a>
            </Link>
          </div>
          {""}
        </LinkWrapper>
      </NavInWrapper>
      {category && (
        <Category
          categoryHover={categoryHover}
          categoryMouseOut={categoryMouseOut}
        />
      )}
    </NavWrapper>
  );
};
export default Nav;
