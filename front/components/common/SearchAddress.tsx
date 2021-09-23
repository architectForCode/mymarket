import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import styled from "styled-components";
import execDaumPostcode from "../../lib/api/search_address";
import { ISearchAddress } from "../../types";

const SearchWrapper = styled.div``;
const SearchBtnWrapper = styled.div`
  width: 100%;
  button {
    width: 100%;
    margin-bottom: 10px;
  }
  div {
    font-size: 0.8rem;
    color: gray;
  }
`;

const SearchAddress: React.FC<ISearchAddress> = ({ setAddress }) => {
  const [where, setWhere] = useState<{
    address: "string" | "";
    extraAddr: "string" | "";
  }>({ address: "", extraAddr: "" });
  const [daum, setDaum] = useState(null);
  const address = useRef<HTMLInputElement>(null);
  const detailAddress = useRef<HTMLInputElement>(null);
  const extraAddress = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (
      address.current &&
      detailAddress.current &&
      extraAddress.current &&
      where
    ) {
      (address.current as HTMLInputElement).value = where.address;
      (extraAddress.current as HTMLInputElement).value = where.extraAddr;
    }
  }, [where, detailAddress, address, extraAddress]);

  useEffect(() => {
    setDaum((window as any).daum);
  }, []);

  return !where.address && !where.extraAddr ? (
    <SearchBtnWrapper>
      <Script
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        strategy="beforeInteractive"
      ></Script>
      <button type="button" onClick={execDaumPostcode(daum, setWhere)}>
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        주소검색
      </button>
      <div>배송지에 따라 상품 정보가 달라질 수 있습니다.</div>
    </SearchBtnWrapper>
  ) : (
    <SearchWrapper>
      <input
        type="text"
        id="sample6_address"
        placeholder="주소"
        ref={address}
      />
      <br />
      <input
        type="text"
        id="sample6_detailAddress"
        placeholder="상세주소"
        ref={detailAddress}
      />
      <input
        type="text"
        id="sample6_extraAddress"
        placeholder="참고항목"
        ref={extraAddress}
      />
    </SearchWrapper>
  );
};

export default SearchAddress;
