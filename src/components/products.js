import React from 'react';
import Item from './item';

class Products extends React.Component {

    render() {
        return this.props.myProducts.map((product) => {
            return <Item key = { product._id }
            product = { product } > </Item>
        });
    }
}
export default Products;