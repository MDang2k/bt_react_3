import React, { Component } from 'react';
import ItemShoe from './ItemShoe';

export default class ListShoe extends Component {
  render() {
    console.log('<ListShoe/>', this.props);

    return (
      <div className="row">
        {this.props.list.map((shoe) => {
          return (
            <ItemShoe handleOnclick={this.props.handleAddToCart} item={shoe} />
          );
        })}
      </div>
    );
  }
}
