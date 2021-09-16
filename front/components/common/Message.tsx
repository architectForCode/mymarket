import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { IMessage } from "../types";

const Background = styled.div`
  position: absolute;
  top: 0;
  width: 99vw;
  height: 100vh;
  background-color: rgba(15, 15, 15, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MessageWrapper = styled.div`
  width: 490px;
  height: 280px;
  display: flex;
  flex-direction: column;
  background-color: white;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;
    margin: 0px 10px;
    font-size: 1.8rem;
    height: 50px;
    color: gray;
    .title {
      font-size: 0.9rem;
      font-weight: 600;
      color: #5f0080;
    }
  }
  main {
    margin: 0 10px;

    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
  }
  footer {
    flex: 1;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 33%;
      background-color: #5f0080;
      height: 3rem;
      color: white;
    }
  }
`;

const Message: React.FC<IMessage> = ({ message, setModal }) => {
  const wrapper = useRef<HTMLDivElement>(null);

  const onClose = (id: string) => (e: React.MouseEvent<any>) => {
    if (id === "modal") {
      setModal(false);
    } else if (id === "wrapper") {
      if (wrapper.current && e.target === e.currentTarget) {
        setModal(false);
      }
    }
  };

  const scrollWindow = () => {
    if (wrapper.current) {
      wrapper.current.style.top = `${window.scrollY}px`;
    }
  };

  useEffect(() => {
    if (wrapper.current) {
      wrapper.current.style.top = `${
        wrapper.current.style.top + window.scrollY
      }px`;
    }
    window.addEventListener("scroll", scrollWindow);

    return () => window.removeEventListener("scroll", scrollWindow);
  }, []);

  return (
    <Background ref={wrapper} onClick={onClose("wrapper")}>
      <MessageWrapper>
        <header>
          <div className="title">알림메세지</div>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={onClose("modal")}
          ></FontAwesomeIcon>
        </header>
        <main>{message}</main>
        <footer>
          <button onClick={onClose("modal")}>확인</button>
        </footer>
      </MessageWrapper>
    </Background>
  );
};

export default Message;
