import Ide from "./Ide";
import "./SelectProject.css";
import React from 'react'

function SelectProject() {
  return (
    <div>
      {/* 특정 프로젝트 선택시 
      Ide(기본틀) 내에 데이터 받아오기 */}
      <Ide />
    </div>
  )
}

export default SelectProject