import React from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";

function Nav() {
  return (
    <ul className="nav justify-content-around shadow-sm bg-white py-2">
      <li className="nav-item nav-link font-weight-bolder nav-title-color">
        프로그라피 프론트 홍석현
      </li>
      <div className="d-flex justify-content-center">
        <li className="nav-item small">
          <Link to="/todos" className="nav-link nav-link-color">
            Todo
          </Link>
        </li>
        <li className="nav-item small">
          <Link to="/movies" className="nav-link nav-link-color">
            영화
          </Link>
        </li>
      </div>
    </ul>
  );
}

export default Nav;
