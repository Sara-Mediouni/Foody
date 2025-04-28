import React from "react";
import hamburger from "../../assets/hamburger.png";
import "./Presentation.css";
import pasta from "../../assets/pizza.png";
import sushi from '../../assets/sushi.png'
import healthy from '../../assets/healthy.png'
const Presentation = () => {
  return (
    <div className="pres">
      <div className="content">
        <div className="hamburger">
          <img src={hamburger} />
        </div>

        <div className="title">
          <h2>It's n<img className="sushi" src={sushi} />t just f<img className="healthy" src={healthy}/>od, it's an experience.</h2>
          <img className="pasta" src={pasta} />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
