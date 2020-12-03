import React from 'react';
import EditProduct from "./EditProduct";
import ProductShow from "./ProductShow";

const ProductItem = ({product, onSubmitDelete, onSubmit}) => {
    const [showResults, setShowResults] = React.useState(false)
    const onEdit = () => setShowResults(true)

   function onSubmit2(value){
        if(value.action === 'delete') {
            onDelete(value)
        }
        else{
            onSubmitUpgrade(value)
        }

    }

    function onSubmitUpgrade(e){
        onSubmit(e);
        setShowResults(false);
    }

    function onDelete(e){
        onSubmitDelete(e)
        setShowResults(false);
    }
    return (
        <div>
            <img className="product_image" src={product.image}/>
            { showResults ? null : <ProductShow product={product} onEdit={onEdit}/> }


            { showResults ? <EditProduct form={`product_${product.id}`} initialValues={product} onSubmit={onSubmit2} /> : null }

        </div>
    );
};

export default ProductItem;