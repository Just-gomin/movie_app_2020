import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  // Router를 이용한 화면 전환시 전달해줄 주소에 대해서 Link를 사용합니다.
  return (
    <div className="navigator">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
