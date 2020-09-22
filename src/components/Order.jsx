import React from "react";
import "../styles/order.css";
import { Table } from "reactstrap";
import icon from "../assets/icon-delete.png";
import { MenuContext } from "../context/MenuProvider";

const Order = () => {
  const { sum, order } = React.useContext(MenuContext);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Cantidad</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {order.length > 0 ? (
          order.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <img src={icon} alt="icon-delete" className="icon-delete" />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No hay productos seleccionados</td>
          </tr>
        )}
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th></th>
          <th>Total</th>
          <th>$ {sum.push}</th>
        </tr>
      </tfoot>
    </Table>
  );
};

export default Order;
