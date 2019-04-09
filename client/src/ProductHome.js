import React, { Component } from 'react';
import ProductList from "./ProductList";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AddProduct from "./AddProduct";

class ProductHome extends Component{
    constructor(props) {
        super(props);
        this.state={
            collection:[],
        };
        this.updateDatabaseData();
    }

    updateDatabaseData=()=>{
        fetch('/list')
            .then(data=>data.json())
            .then(jsonData=>this.setState({collection:jsonData}));
    };

    render(){
        return(
            <div>
                <Router>
                    <Link className="linkInGeneral" to="/">Home</Link>
                    <Link className="linkInGeneral" to="/addProduct">Add Product</Link>
                    <h1>Here are all the products</h1>
                    <ProductList collection={this.state.collection}/>


                    {/*<Route path="/" component={ProductList}/>*/}
                    <Route path="/addProduct" component={AddProduct}/>
                </Router>
            </div>
        );
    }
}

export default ProductHome;