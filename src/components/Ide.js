import "./Ide.css";
import React from "react";
import Print from "./ideComponents/Print";
import CodeInput from "./ideComponents/CodeInput";
import Info from "./ideComponents/Info";
//코드작성창, 실행화면, 설명부분

function Ide() {
  return (
    <div className="container">
      <div className="stuedentArea">
        <div className="printHead"> 작업 표시 창 </div>
        <div className="print">
          <Print />
        </div>
        <div className="CodeInputHead"> 코드 입력 창 </div>
        <div className="CodeInput">
          <CodeInput />
        </div>
      </div>
      <div className="providedArea">
        <div className="infoHead"> 안내서 </div>
        <div className="info">
          <Info />
        </div>
      </div>
    </div>
  );
}

export default Ide;
