import React, { Component } from 'react';

class EditProduct extends Component{
    submitEditForm = (e) =>{
        e.preventDefault();
        fetch('/update', {
            method: 'PUT',
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
            .then(()=>this.props.updateDatabaseData())
            .then(()=>this.props.getRidOfEdit());
    };

    render(){
        console.log("In the edit data area");
        console.log(this.props.editDataToSend);
        return(
            <div>
                <h1>Edit Product</h1>
                <form onSubmit={this.submitEditForm}>
                    <p>
                        {/*<label htmlFor="productID">ProductID:</label>*/}
                        <input hidden type="text" id="productID" name="productID" defaultValue={this.props.editDataToSend.productID} />
                    </p>

                    <p>
                        <label htmlFor="price">price:</label>
                        <input type="text" id="price" name="price" defaultValue={this.props.editDataToSend.price}/>
                    </p>

                    <p>
                        <label htmlFor="quantity">quantity:</label>
                        <input type="text" id="quantity" name="quantity" defaultValue={this.props.editDataToSend.quantity}/>
                    </p>

                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default EditProduct;

