import React, { Component } from 'react';
import EditProduct from "./EditProduct";

class ProductList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            editDataToSend: {},
        }
    }

    editProduct=(e)=>{
        this.setState({edit:true});
        fetch('/edit/'+e.target.name)
            .then(data=>data.json())
            .then(response => this.setState({editDataToSend: response}));
    };

    getRidOfEdit = () =>{
        this.setState({edit: false});
    };

    deleteProduct=(e)=>{
        console.log(e.target);
        fetch('/delete', {
            method: 'DELETE',
            headers: {
                'Accept': "application/json",
                'Content-type': 'application/json',
            },
            body: JSON.stringify({productID:e.target.name}),
        })
            .then(()=>this.props.updateDatabaseData());
    };

    render(){
        let collectionMap = this.props.collection.map(
            (eachProduct)=>{
                return (<div key={eachProduct.productID}>
                    <p>ProductID: {eachProduct.productID} is ${eachProduct.price}.
                        And we have {eachProduct.quantity} of them.
                        <button className="buttonLink" name={eachProduct.productID} onClick={this.editProduct}>Edit</button>
                        <button className="buttonLink" name={eachProduct.productID} onClick={this.deleteProduct}>Delete</button>
                    </p>
                </div>)
            }
        );

        let showEdit = "";
        if(this.state.edit)
            showEdit = <EditProduct editDataToSend={this.state.editDataToSend} updateDatabaseData={this.props.updateDatabaseData} getRidOfEdit={this.getRidOfEdit}/>;
        else
            showEdit = "";

        return(
            <div>
                {showEdit}
                <h1>Product List here</h1>
                {collectionMap}
            </div>
        );
    }
}

export default ProductList;