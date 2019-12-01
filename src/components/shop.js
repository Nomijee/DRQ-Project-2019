import React from 'react'
import Products from './products';
import axios from 'axios';


class Shop extends React.Component {

    state = {
        products: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/products')
            .then((response) => {
                this.setState({ products: response.data.products })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h1>Christmas Market</h1>
                <Products myProducts={this.state.products}></Products>
            </div>
        );
    }
}
export default Shop;