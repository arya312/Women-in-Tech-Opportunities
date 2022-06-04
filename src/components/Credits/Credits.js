import React from "react";
import { CreditP, CreditWrapper } from "./CreditElements";

const Credits = () => {
  return (
    <>
      <CreditWrapper>
        <CreditP>
          Designed and Developed by <span><a href="https://www.linkedin.com/in/arya-pandey-5340651b8/
" style={{textDecoration:"none", color: "#D7F8FF"}}>Arya Pandey</a></span> and <span><a href="https://www.linkedin.com/in/atmikamishra/
" style={{textDecoration:"none", color: "#D7F8FF"}}>Atmika Mishra</a>.</span>
          <br />
          ©2022 WITO – All rights reserved.
        </CreditP>
      </CreditWrapper>
    </>
  );
};

export default Credits;
