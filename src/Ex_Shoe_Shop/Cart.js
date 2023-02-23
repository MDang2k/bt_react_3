import React, { Component } from 'react';

export default class Cart extends Component {
  renderTbody = () => {
    return this.props.cart.map((item) => {
      return (
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <button className="btn btn-danger" onClick={() => {this.props.handleChangeQuantity(item.id, -1)}}>-</button>
            <strong className="mx-3">{item.soLuong}</strong>
            <button className="btn btn-success" onClick={() => {this.props.handleChangeQuantity(item.id, 1)}}>+</button>
            <button className="btn btn-warning ml-2" onClick={() => {this.props.handleRemoveShoe(item.id)}}>Remove</button>
          </td>
          <td>{item.price * item.soLuong}</td>
          <td>
            <img src={item.image} style={{ width: 50 }} alt="" />
          </td>
        </tr>
      );
    });
  };
  render() {
  
    return (
      <div>
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Img</th>
          </thead>
          <tbody>{this.renderTbody()}</tbody>
        </table>
      </div>
    );
  }
}

