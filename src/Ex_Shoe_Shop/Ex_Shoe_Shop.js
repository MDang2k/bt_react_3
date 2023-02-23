import React, { Component } from "react";
import Cart from "./Cart";
import { dataShoe } from "./data_shoe";
import ListShoe from "./ListShoe";

export default class Ex_Shoe_Shop extends Component {
  state = {
    listShoe: dataShoe,
    cart: [],
  };
  handleAddToCart = (shoe) => {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => {
      return item.id == shoe.id;
    });

    // th1 : sp chưa có trong giỏ hàng => push
    if (index == -1) {
      let newShoe = { ...shoe, soLuong: 1 };
      cloneCart.push(newShoe);
    } else {
      cloneCart[index].soLuong++;
    }

    // th2 : sp đã có trong giỏi hàng => update số lượng
    //  shoe.soLuong
    this.setState({
      cart: cloneCart,
    });
  };
  handleChangeQuantity = (id, change) => {
    // change : 1 hoặc -1
    let index = this.state.cart.findIndex((element) => element.id == id);
    let cloneCart = this.state.cart;

    switch (change) {
      case -1: {
        if (cloneCart[index].soLuong == 1) {
          this.handleRemoveShoe(id);
        } else {
          cloneCart[index].soLuong--;
          this.setState({
            cart: cloneCart,
          });
        }
        break;
      }
      case 1: {
        cloneCart[index].soLuong++;
        this.setState({
          cart: cloneCart,
        });
        break;
      }
    }
  };
  handleRemoveShoe = (id) => {
    let index = this.state.cart.findIndex((element) => element.id == id);
    let cloneCart = this.state.cart;

    cloneCart.splice(index, 1);
    this.setState({
      cart: cloneCart,
    });
  };
  render() {
    console.log("cart", this.state.cart);
    // props.chidren : nội dung nằm giữ 2 thẻ đóng và mở
    return (
      <div className="container">
        <h2>{this.props.children}</h2>
        <Cart
          cart={this.state.cart}
          handleChangeQuantity={this.handleChangeQuantity}
          handleRemoveShoe={this.handleRemoveShoe}
        />
        <ListShoe
          handleAddToCart={this.handleAddToCart}
          list={this.state.listShoe}
        />
      </div>
    );
  }
}
