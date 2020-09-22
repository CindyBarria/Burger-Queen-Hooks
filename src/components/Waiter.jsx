import React from "react";
import "../styles/waiter.css";
import { Link } from "react-router-dom";
import Order from "./Order";
import ClientInfo from "./ClientInfo";
import ButtonSend from "./buttonSend";
import { MenuContext } from "../context/MenuProvider";

const Waiter = () => {
  const {
    breakfast,
    lunch,
    drinks,
    clickProduct,
    order,
    sum,
  } = React.useContext(MenuContext);

  return (
    <div className="waiterContainer">
      <header className="header">
        <Link to="/">
          <div>
            <button className="goToHome">Home</button>
          </div>
        </Link>
        <Link to="/cocina">
          <div>
            <button className="goToKitchen">Ver pedidos</button>
          </div>
        </Link>
      </header>
      <div className="newOrderInfo">
        <div className="clientInfo">
          <ClientInfo></ClientInfo>
        </div>
        <h1 className="menuTitle"> Desayunos </h1>{" "}
        <hr className="hr" size="3px" />
        {breakfast.map((product) => {
          return (
            <button
              className="containerCard"
              onClick={() => clickProduct(product)}
            >
              <div className="productCard" key={product.id}>
                <p className="card-price">{product.price}</p>
                <img src={product.img} alt="" className="item-img" />
                <p className="card-name">{product.name}</p>
              </div>
            </button>
          );
        })}
        <h1 className="menuTitle"> Almuerzos </h1>{" "}
        <hr className="hr" size="3px" />
        {lunch.map((product) => {
          return (
            <button
              className="containerCard"
              onClick={() => clickProduct(product)}
            >
              <div className="productCard" key={product.id}>
                <p className="card-price">{product.price}</p>
                <img src={product.img} alt="" className="item-img" />
                <p className="card-name">{product.name}</p>
              </div>
            </button>
          );
        })}
        <h1 className="menuTitle"> Para beber </h1>{" "}
        <hr className="hr" size="3px" />
        {drinks.map((product) => {
          return (
            <button
              className="containerCard"
              onClick={() => clickProduct(product)}
            >
              <div className="productCard" key={product.id}>
                <p className="card-price">{product.price}</p>
                <img src={product.img} alt="" className="item-img" />
                <p className="card-name">{product.name}</p>
              </div>
            </button>
          );
        })}
      </div>
      <div className="containerOrder">
        <div>
          {" "}
          <Order order={order} sum={sum}></Order>{" "}
        </div>
        <ButtonSend />
      </div>
    </div>
  );
};

export default Waiter;
