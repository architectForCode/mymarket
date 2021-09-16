import {
  faCheckCircle,
  faMapMarkerAlt,
  faSearch,
  faStop,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styled from "styled-components";
import Nav from "../../components/common/Nav/Nav";

const CartWrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  padding: 50px 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  header {
    font-size: 1.7rem;
    margin-bottom: 80px;
  }
  main {
    display: flex;
    width: 100%;
    section.cartInfo {
      width: 70%;
      margin-right: 20px;
      ul.controller {
        display: flex;
        align-items: center;
        width: 100%;
        border-bottom: 1px solid black;
        padding: 15px 10px;
        color: #636564;
        li:nth-child(1) {
          display: flex;
          align-items: center;
        }
        span {
          margin: 0px 20px;
        }
      }
      ul.cartList {
        padding: 0 10px;
        li {
          display: flex;
          align-items: center;
          svg {
            color: #636564;
          }
          div.cartList__info {
            display: grid;
            grid-template-columns: 1fr 6fr 2fr 1fr 0.5fr;
            align-items: center;
            font-weight: 600;
            color: #333333;
            button {
              width: 5rem;
              height: 2rem;
              border: 1px solid #cccccc;
              border-radius: 3px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              font-size: 1.2rem;
              span {
                font-size: 1.5rem;
              }
            }
            svg {
              margin-left: 20px;
              font-size: 1.5rem;
            }
          }
        }
      }
    }

    section.payment {
      height: 92vh;
      flex: 1;
      color: #333333;
      margin-top: 50px;
      font-size: 1.1rem;
      display: grid;
      grid-template-rows: 1fr 1.5fr 0.5fr;
      .payment__delivery {
        border: 1px solid #cccccc;
        padding: 15px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        h2 {
          svg {
            margin-right: 10px;
          }
        }
        p {
          line-height: 1.4;
          i {
            color: #5f0080;
          }
        }
        button {
          color: #5f0080;
          border: 1px solid #5f0080;
          padding: 10px;
          border-radius: 5px;
          cursor: pointer;
        }
      }
      .payment__price {
        border: 1px solid #cccccc;
        border-top: none;
        background-color: #fafafa;
        padding: 15px;
        display: grid;
        grid-template-rows: 1fr 1fr 1.5fr 1.5fr;
        align-items: center;
        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }
        li#allPrice {
          border-top: 1px solid #cccccc;
        }
      }
      .payment__submit {
        height: 60%;
        background-color: #dddddd;
        align-self: center;
        border-radius: 5px;
        color: white;
        font-size: 1.1rem;
      }
    }
  }
`;

const Cart = () => {
  return (
    <>
      <Nav />
      <CartWrapper>
        <header>장바구니</header>
        <main>
          <section className="cartInfo">
            <ul className="controller">
              <li>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{ marginRight: "10px", fontSize: "1.5rem" }}
                ></FontAwesomeIcon>
                전체선택(2/2)
              </li>
              <span>|</span>
              <li>선택삭제</li>
            </ul>
            <ul className="cartList">
              <li>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{ marginRight: "10px", fontSize: "1.5rem" }}
                ></FontAwesomeIcon>
                <div className="cartList__info">
                  <Image
                    src="/images/logo.jpg"
                    alt="picture"
                    width={100}
                    height={100}
                  ></Image>
                  <h2>친환경 햇감자 600g</h2>
                  <button>
                    <span>-</span>1<span>+</span>
                  </button>
                  <div>2,690원</div>
                  <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                </div>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{ marginRight: "10px", fontSize: "1.5rem" }}
                ></FontAwesomeIcon>
                <div className="cartList__info">
                  <Image
                    src="/images/logo.jpg"
                    alt="picture"
                    width={100}
                    height={100}
                  ></Image>
                  <h2>친환경 햇감자 600g</h2>
                  <button>
                    <span>-</span>1<span>+</span>
                  </button>
                  <div>2,690원</div>
                  <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                </div>
              </li>{" "}
              <li>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{ marginRight: "10px", fontSize: "1.5rem" }}
                ></FontAwesomeIcon>
                <div className="cartList__info">
                  <Image
                    src="/images/logo.jpg"
                    alt="picture"
                    width={100}
                    height={100}
                  ></Image>
                  <h2>친환경 햇감자 600g</h2>
                  <button>
                    <span>-</span>1<span>+</span>
                  </button>
                  <div>2,690원</div>
                  <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                </div>
              </li>{" "}
              <li>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{ marginRight: "10px", fontSize: "1.5rem" }}
                ></FontAwesomeIcon>
                <div className="cartList__info">
                  <Image
                    src="/images/logo.jpg"
                    alt="picture"
                    width={100}
                    height={100}
                  ></Image>
                  <h2>친환경 햇감자 600g</h2>
                  <button>
                    <span>-</span>1<span>+</span>
                  </button>
                  <div>2,690원</div>
                  <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                </div>
              </li>
            </ul>
          </section>
          <section className="payment">
            <div className="payment__delivery">
              <h2>
                <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                <span>배송지</span>
              </h2>
              <p>
                <i>배송지를 입력</i>하고
                <br /> 배송유형을 확인해보세요!
              </p>
              <button>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                주소검색
              </button>
            </div>
            <ul className="payment__price">
              <li>
                <div>상품금액</div>
                <span>0원</span>
              </li>
              <li>
                <div>상품할인금액</div>
                <span>0원</span>
              </li>
              <li>
                <div>배송비</div>
                <span>0원</span>
              </li>
              <li id="allPrice">
                <div>결제예정금액</div>
                <span>0원</span>
              </li>
            </ul>
            <button className="payment__submit"> 배송지를 입력해주세요</button>
          </section>
        </main>
      </CartWrapper>
    </>
  );
};

export default Cart;
