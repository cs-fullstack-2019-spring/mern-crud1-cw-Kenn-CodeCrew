import React, { Component } from 'react';

class ProductList extends Component{
    render(){
        let collectionMap = this.props.collection.map(
            (eachProduct)=>{
                return (<div key={eachProduct.productID}>
                    <p>ProductID: {eachProduct.productID} is ${eachProduct.price}. And we have {eachProduct.quantity} of them. <button className="buttonLink">Delete</button></p>
                </div>)
            }
        );
        return(
            <div>
                <h1>Product List here</h1>
                {collectionMap}
            </div>
        );
    }
}

export default ProductList;