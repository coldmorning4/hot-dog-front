import React from 'react';

const ProductShow = ({product, onEdit}) => {
    return (
        <div>
            <p className="name">{product.name}</p>
            <p className="title">{product.title}$</p>
            <p className="description">{product.description}</p>
            <button className="product_button_edit"  onClick={onEdit}>Edit</button>

        </div>
    );
};

export default ProductShow;