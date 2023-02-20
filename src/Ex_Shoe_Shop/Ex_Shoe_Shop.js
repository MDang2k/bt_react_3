import React, { Component } from 'react';
import Cart from './Cart';
import { dataShoe } from './data_shoe';
import ListShoe from './ListShoe';

export default class Ex_Shoe_Shop extends Component {
  state = {
    listShoe: dataShoe,
    cart: [],
  };
  handleAddToCart = (shoe) => {
    let cloneCart = [...this.state.cart];
    cloneCart.push(shoe);
    this.setState({
      cart: cloneCart,
    });
  };
  render() {
    console.log('props', this.props);
    // props.chidren : nội dung nằm giữ 2 thẻ đóng và mở
    return (
      <div className="container">
        <h2>{this.props.children}</h2>
        <Cart cart={this.state.cart} />
        <ListShoe
          handleAddToCart={this.handleAddToCart}
          list={this.state.listShoe}
        />
      </div>
    );
  }
}
