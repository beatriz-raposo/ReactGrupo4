import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/coruja_logo.svg";
import './style.css';

function HeaderFeed() {
  return (
    <header>
      <div className="container_feed">
        <div className="logo_feed">
        <Link to={"/Sobre"}>
        <img src= {Logo} alt="desenho de uma coruja" style={{ width: "60px" }} />
          </Link>
        </div>

        <div className="btn-newPost_feed">
          <Link to={"/Post"}>
            <button>Criar</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HeaderFeed;