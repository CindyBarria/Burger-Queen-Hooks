import React, { useState } from "react";
/* import data from "../menu.json"; */
const Product = (props) => {
  /*   const Productdata = data;
  const [productos, setProductos] = useState(Productdata);
  const handleAddProduct = (event) => {
    const { name, price } = event.target;
    setProductos([...productos, name, price]);
  }; */
  return (
    <button
      className="containerCard"
      /*       onClick={handleAddProduct}
      onSubmit={(event) => {
        event.preventDefault();
        if (!productos.name || !productos.price) return;

        props.addProducs(productos);
        setProductos(Productdata);
      }} */
    >
      <div className="productCard" key={props.id}>
        <p className="card-price">{props.price}</p>
        <img src={props.img} alt="" className="item-img" />
        <p className="card-name">{props.name}</p>
      </div>
    </button>
  );
};

export default Product;
