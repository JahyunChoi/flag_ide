import React from "react";
import "./Main.css";
import SelectProject from "./SelectProject";

function Main() {
  return (
    <div className="mainContainer">
      {/* 로그인, 회원가입 창 */}
      {/* 로그인 성공시 SelectProject로 이동 */}
      <SelectProject />
    </div>
  );
}

export default Main;
