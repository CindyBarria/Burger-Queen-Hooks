import React, { useState } from "react";
import { MenuContext } from "../context/MenuProvider";
import db from "../firebase";
/* import data from "../menu.json"; */
const ButtonSend = (props) => {
  const { order } = React.useContext(MenuContext);

  /*   sendToKitchen = () => {
    // Utilizamos la referencia
    const total = this.orderElement.current.state.total;
    let date = new Date().toLocaleString();

    db.collection("orders")
      .add({
        name: this.state.clientName,
        table: this.state.clientTable,
        products: this.products,
        total: "$" + total,
        date,
        clientReady: false,
        delivered: false,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert("Pedido enviado a cocina");
        window.location.reload(false);
      })

      .catch(function (error) {
        console.error("Error adding document: ", error);
        alert("Error al enviar, intentelo denuevo");
      });
  };
  toConfirmOrder = (e) => {
    if (window.confirm("Enviar pedido a cocina?")) {
      this.sendToKitchen();
      e.preventDefault();
    }
  };

  cleanOrder = (e) => {
    if (window.confirm("Cancelar pedido?")) {
      e.preventDefault();
      window.location.reload(false);
    }
  }; */
  return (
    <div className="summary">
      <button className="buttonEnviar" /* onClick={sendToKitchen} */>
        Enviar a cocina
      </button>
      <button className="buttonCancelar" /* onClick={this.cleanOrder} */>
        Cancelar pedido
      </button>
    </div>
  );
};

export default ButtonSend;
