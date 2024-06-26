import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/coruja_logo.svg";
import './style.css';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
        <Link to={"/Sobre"}>
        <img src= {Logo} alt="desenho de uma coruja" style={{ width: "60px" }} />
          </Link>
        </div>

        <div className="btn-newPost">
          <Link to={"/"}>
            <button>Voltar</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;