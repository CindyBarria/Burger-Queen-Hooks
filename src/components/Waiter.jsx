import React, { useState } from "react";
import data from "../menu.json";
import "../styles/waiter.css";
import { Link } from "react-router-dom";
import Order from "./Order";
import ClientInfo from "./ClientInfo";
import Product from "./Product";
const Waiter = () => {
  const Productdata = data;
  let desayunos = data.breakfast;
  let almuerzos = data.lunch;
  let bebidas = data.drinks;
  /*   const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" },
  ];
  const [users, setUsers] = useState(usersData);
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }; */
  const [productos, setProductos] = useState(Productdata);
  const addProduct = (product) => {
    product.id = productos.length + 1;
    console.log(product.id, "productosss");
    setProductos([...productos, product]);
  };

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
        {desayunos.map((product, i) => {
          return (
            <Product
              addproduct={addProduct}
              key={product.id}
              name={product.name}
              price={product.price}
              img={product.img}
            ></Product>
          );
        })}
        <h1 className="menuTitle"> Almuerzos </h1>{" "}
        <hr className="hr" size="3px" />
        {almuerzos.map((product, i) => {
          return (
            <Product
              addproduct={addProduct}
              key={product.id}
              name={product.name}
              price={product.price}
              img={product.img}
            ></Product>
          );
        })}
        <h1 className="menuTitle"> Para beber </h1>{" "}
        <hr className="hr" size="3px" />
        {bebidas.map((product, i) => {
          return (
            <Product
              addproduct={addProduct}
              key={product.id}
              name={product.name}
              price={product.price}
              img={product.img}
            ></Product>
          );
        })}
      </div>
      <div className="containerOrder">
        <div>
          <Order productos={productos}></Order>
        </div>
        <div className="summary">
          <button className="buttonEnviar">Enviar a cocina</button>
          <button className="buttonCancelar">Cancelar pedido</button>
        </div>
      </div>
    </div>
  );
};

export default Waiter;
