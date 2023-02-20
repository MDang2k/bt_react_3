import React, { Component } from 'react';

export default class Cart extends Component {
  renderTbody = () => {
    return this.props.cart.map((item) => {
      return (
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
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
            <th>Price</th>
            <th>Img</th>
          </thead>
          <tbody>{this.renderTbody()}</tbody>
        </table>
      </div>
    );
  }
}
