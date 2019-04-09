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
                    <Route path="/addProduct"
                           component={()=><AddProduct updateDatabaseData={this.updateDatabaseData}/>
                           }/>

                    <ProductList collection={this.state.collection} updateDatabaseData={this.updateDatabaseData}/>


                    {/*<Route path="/" component={ProductList}/>*/}
                    {/*<Route path="/" component={AddProduct}/>*/}

                </Router>
            </div>
        );
    }
}

export default ProductHome;