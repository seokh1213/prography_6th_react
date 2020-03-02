import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="Nav">
      <ul>
        <li>프로그라피 프론트 홍석현</li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
        <li>
          <Link to="/movies">영화</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
