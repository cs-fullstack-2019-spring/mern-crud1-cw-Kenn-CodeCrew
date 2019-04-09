import React, { Component } from 'react';

class ProductList extends Component{
    deleteProduct=(e)=>{
        console.log(e.target);
        fetch('/delete', {
            method: 'DELETE',
            headers: {
                'Accept': "application/json",
                'Content-type': 'application/json',
            },
            body: JSON.stringify({productID:e.target.name}),
        });
    };

    render(){
        let collectionMap = this.props.collection.map(
            (eachProduct)=>{
                return (<div key={eachProduct.productID}>
                    <p>ProductID: {eachProduct.productID} is ${eachProduct.price}. And we have {eachProduct.quantity} of them. <button className="buttonLink" name={eachProduct.productID} onClick={this.deleteProduct}>Delete</button></p>
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