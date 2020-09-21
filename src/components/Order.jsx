import React from "react";
import "../styles/order.css";
import { Table } from "reactstrap";
import icon from "../assets/icon-delete.png";
const Order = (props) => (
  <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>Producto</th>
        <th>Precio</th>
        <th>Eliminar</th>
      </tr>
    </thead>
    <tbody>
      {props.productos.length > 0 ? (
        props.productos.map((productos) => (
          <tr key={productos.id}>
            <td>{productos.name}</td>
            <td>{productos.price}</td>
            <td>
              <img src={icon} alt="icon-delete" className="icon-delete" />
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th></th>
        <th>Total</th>
        <th>$0</th>
      </tr>
    </tfoot>
  </Table>
);

export default Order;
