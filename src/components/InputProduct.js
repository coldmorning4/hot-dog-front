import React from 'react';
import ModalInput from "./ModalInput";
import logo from './img/logo.jpeg';


const InputProduct = ({header}) => {

    return (
        <div>
            <div className='products_header'>
                <div>
                    <img src={logo} className="logo"/>
                    <ModalInput header={header}/>
                </div>

            </div>
        </div>
    );
};

export default InputProduct;