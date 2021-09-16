
import { useRef } from "react";
import styled from "styled-components";
import DaumPostCode from "react-daum-postcode";


const SearchWrapper = styled.div``;

const SearchAddress = () => {
  const postCode = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLInputElement>(null);
  const detailAddress = useRef<HTMLInputElement>(null);
  const extraAddress = useRef<HTMLInputElement>(null);
    
  


//   return (
//     <SearchWrapper>
  

//       <input
//         type="text"
//         id="sample6_postcode"
//         placeholder="우편번호"
//         ref={postCode}
//       />
//       <input
//         type="button"
//         onClick="sample6_execDaumPostcode()"
//         value="우편번호 찾기"
//       />
//       <br />
//       <input
//         type="text"
//         id="sample6_address"
//         placeholder="주소"
//         ref={address}
//       />
//       <br />
//       <input
//         type="text"
//         id="sample6_detailAddress"
//         placeholder="상세주소"
//         ref={detailAddress}
//       />
//       <input
//         type="text"
//         id="sample6_extraAddress"
//         placeholder="참고항목"
//         ref={extraAddress}
//       />
//     </SearchWrapper>
//   );
// };

// export default SearchAddress;
const Postcode = () => {
    const handleComplete = (data:any) => {
      let fullAddress = data.address;
      let extraAddress = ''; 
      
      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
          extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
        }
        fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
      }
  
      console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    }
  
    return (
      <DaumPostcode
        onComplete={handleComplete}
        { ...props }
      />
    );
  }

  export default Postcode;