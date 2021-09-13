import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { IMessage } from "../types";

const MessageWrapper = styled.div`
  width: 490px;
  height: 280px;
  position: absolute;
  top: 0;
  border: 1px solid black;
`;

const Message: React.FC<IMessage> = ({ message }) => {
  return (
    <MessageWrapper>
      <header>
        <div>알림메세지</div>
        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
      </header>
      <main>{message}</main>
      <footer>
        <button>확인</button>
      </footer>
    </MessageWrapper>
  );
};

export default Message;
