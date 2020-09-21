import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Home = () => {
  return (
    <div className="cotenedorInicial">
      <img src={logo} alt="logo" className="logo"></img>
      <div className="containerButton">
        <Link to="/mesero">
          <button className="button">Ingresar pedido</button>
        </Link>
        <Link to="/cocina">
          <button className="button">Ingresar a cocina</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
