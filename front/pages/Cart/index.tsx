import styled from "styled-components";
import Nav from "../../components/Nav";

const CartWrapper = styled.div``;

const Cart = () => {
  return (
    <>
      <Nav />
      <CartWrapper>
        <header>장바구니</header>
        <main>
          <section className="cartInfo">
            <div>
              <div>전체선택(2/2)</div>
              <div>선택삭제</div>
            </div>
            <div></div>
          </section>
          <section className="payment"></section>
        </main>
      </CartWrapper>
    </>
  );
};

export default Cart;
