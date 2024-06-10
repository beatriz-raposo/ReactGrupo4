import React from "react";
import { Link } from "react-router-dom";
import './style.css';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
        <Link to={"/Feed"}>
        <img src={Back} alt="seta" style={{ width: "50px" }} />
          <h1>OwlCard</h1>
          </Link>
        </div>

        <div className="btn-newPost">
          <Link to={"/Post"}>
            <button>Criar novo card</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;