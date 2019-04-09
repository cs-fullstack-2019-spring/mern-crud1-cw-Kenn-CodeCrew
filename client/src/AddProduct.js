import React, { Component } from 'react';

class AddProduct extends Component{

    submitProductForm=(e)=>{
        e.preventDefault();
        console.log("Does this work??");
        fetch('/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                productID: e.target.productID.value,
                price: e.target.price.value,
                quantity: e.target.quantity.value,
            }),
        })
            .then(this.props.updateDatabaseData());
    };

    render(){
        return(
            <div>
                <h1>Add Product</h1>
                <form onSubmit={this.submitProductForm}>
                    <p>
                        <label htmlFor="productID">ProductID:</label>
                        <input type="text" id="productID" name="productID"/>
                    </p>

                    <p>
                        <label htmlFor="quantity">quantity:</label>
                        <input type="text" id="quantity" name="quantity"/>
                    </p>

                    <p>
                        <label htmlFor="price">price:</label>
                        <input type="text" id="price" name="price"/>
                    </p>

                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddProduct;