import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/coruja_logo.svg";
import './style.css';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
        <Link to={"/Feed"}>
        <img src= {Logo} alt="desenho de uma coruja" style={{ width: "50px" }} />
          <h1>OwlCard</h1>
          </Link>
        </div>

        {/* <div className="btn-newPost">
          <Link to={"/Feed"}>
            <button>Seus FlashCards</button>
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default Header;