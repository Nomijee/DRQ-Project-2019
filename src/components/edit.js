import React from 'react';
import axios from 'axios';

class Edit extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {Name:'',
                      Price:'',
                      Poster:'',
                      _id:''};
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleProductNameChange = this.handleProductNameChange.bind(this);
        this.handleProductPriceChange = this.handleProductPriceChange.bind(this);
        this.handleProductPosterChange = this.handleProductPosterChange.bind(this);
      }
componentDidMount(){

    axios.get('http://localhost:4000/api/products/'+this.props.match.params.id)
    .then((response)=>{
        this.setState({
            _id:response.data._id,
            Name:response.data.name,
            Price:response.data.price,
            Poster:response.data.poster
        })
    })
    .catch();


}
handleProductNameChange(e){
    this.setState({Name: e.target.value});
  }

  handleProductPriceChange(e){
    this.setState({Price: e.target.value});
  }

  handleProductPosterChange(e){
    this.setState({Poster: e.target.value});
  }

  handleSubmit(e){
    alert(this.state.Name+ "      " + this.state.Price 
    +"       "+ this.state.Poster);
    e.preventDefault();
    
    const newProduct = {
        name: this.state.Name,
        price: this.state.Price,
        poster: this.state.Poster
    };
     
    axios.put('http://localhost:4000/api/products/'+this.state._id, 
    newProduct)
    .then()
    .catch();


    this.setState({Name:'',
                    Price:'',
                    Poster:''});    
  }


    render(){
        return(
          <div className="wrapper">
          <div className="form-wrapper">
              <h1>Edit Product</h1>
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
                      <button type="submit">Edit Product</button>
                  </div>
              </form>
          </div>
      </div>
        )
    }
}

export default Edit;