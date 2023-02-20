import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
import pokemon from "../asset/612ce4761b9679000402af1c.png"
import four from "../asset/four.png"
import battle from "../asset/Battle.png"

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="homepics"><img style={{width:"400px"}} src={pokemon}/></div>
        <div className="homebuttons">
        <Link to="/pokedex" className="pokedex">
          <button className="start">START</button>
        </Link>
        <Link to="/account" className="pokedex">
          <button className="start3">LOG IN</button>
        </Link></div>
        <div className="homepics"><img style={{width:"400px", marginTop:"5%"}} src={battle}/></div>
      </div>
    </>
  );
};

export default Home;
