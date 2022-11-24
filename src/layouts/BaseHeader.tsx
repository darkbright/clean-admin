import React from "react";
import Logo from "../assets/logos/Logo";

const BaseHeader: React.FC = () => {
  return (
    <>
      <Logo />
      <span style={{ marginLeft: "15px", color: "#a5b9bc" }}>
        개미는 뚠뚠! 오늘도 뚠뚠! 열심히 일을 하네 🦕🦔🐫🐕🖤
      </span>
    </>
  );
};

export default BaseHeader;
