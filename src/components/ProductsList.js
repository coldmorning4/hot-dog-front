import React, {Fragment, useEffect} from 'react'
import '../App.css'
import ProductItem from "./ProductItem";

let actions = require("../app/actions.jsx");
let connect = require("react-redux").connect;

const ProductsList = (props) => {

    // create a product

    const getProducts = async () => {
        try {
            const response = await fetch(`https://hot-dog-projectreact.herokuapp.com/products`);
            const jsonData = await response.json();

            jsonData.forEach((product) => props.addProduct(product));
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        getProducts().then(products =>
            products);
    }, []);

    const loadedProducts = () => {
        return [...props.products][0][1];
    }

    // delete a product

    const deleteProduct = async (product) => {
        try {
            const response = await fetch(`https://hot-dog-projectreact.herokuapp.com/products/${product.id}`, {
                method: "DELETE"
            })

            console.log(response);
            props.deleteProduct(product);
        } catch (err) {
            console.error(err.message)
        }
    }

    // update a product

    const updateProduct = async (product) => {
        try {
            console.log(product);
            const response = await fetch(`https://hot-dog-projectreact.herokuapp.com/products/${product.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({product: product})
            })

            props.editProduct(product);
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            {" "}
            <div className="small_header">All hot hot-dogs</div>
            <div className='products_content'>

                {loadedProducts().map(product => (
                    <div className='products_block'>
                        <ProductItem product={product} onSubmit={updateProduct} onSubmitDelete={deleteProduct}/>
                    </div>
                ))}

            </div>
        </Fragment>
    )
};

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

export default connect(mapStateToProps, actions)(ProductsList);

