import React, {Fragment} from 'react';
import ProductsList from "./ProductsList";
import InputProduct from "./InputProduct";

const Main = () => {

    return (
            <Fragment>
                <InputProduct header={"Add hot-dog"}/>
                <ProductsList/>
            </Fragment>

    );
};

export default Main


