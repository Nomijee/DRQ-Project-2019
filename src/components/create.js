import React from 'react';
import axios from 'axios';
import './create.css';
import { newExpression } from '@babel/types';

class Create extends React.Component {

    // constructor
    constructor(props) {
        super(props);

        this.state = {
            Name: '',
            Price: '',
            Poster: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleProductNameChange = this.handleProductNameChange.bind(this);
        this.handleProductPriceChange = this.handleProductPriceChange.bind(this);
        this.handleProductPosterChange = this.handleProductPosterChange.bind(this);
    }

    // methods for saving the input values to the designated variables 
    handleProductNameChange(e) {
        this.setState({ Name: e.target.value });
    }

    handleProductPriceChange(e) {
        this.setState({ Price: e.target.value });
    }

    handleProductPosterChange(e) {
        this.setState({ Poster: e.target.value });
    }
    // method to handle the submit request
    handleSubmit(e) {
        alert(this.state.Name + "      " + this.state.Price +
            "       " + this.state.Poster);
        e.preventDefault();

        // new product
        const newProduct = {
            name: this.state.Name,
            price: this.state.Price,
            poster: this.state.Poster
        };
        // newporduct  posted to the link
        axios.post('http://localhost:4000/api/products', newProduct)
            .then()
            .catch();

        // setting state
        this.setState({
            Name: '',
            Price: '',
            Poster: ''
        });
    }

    render() {
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Add New Product</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className='productName'>
                            <label>Product Name</label>
                            <input
                                type='text'
                                className='form-control'
                                value={this.state.Name}
                                onChange={this.handleProductNameChange}
                            ></input>
                        </div>
                        <div className='productPrice'>
                            <label>Product Price</label>
                            <input
                                type='text'
                                className='form-control'
                                value={this.state.Price}
                                onChange={this.handleProductPriceChange}
                            ></input>
                        </div>
                        <div className='productPoster'>
                            <label>Product Poster Url</label>
                            <textarea
                                row='3'
                                className='form-control'
                                value={this.state.Poster}
                                onChange={this.handleProductPosterChange}
                            ></textarea>
                        </div>
                        <div className='createProduct'>
                            <button type="submit">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Create;