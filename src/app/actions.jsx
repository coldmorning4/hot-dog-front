let addProduct = function (product) {
    return {
        type: "ADD_PRODUCT",
        product
    }
};
let editProduct = function (product) {
    return {
        type: "EDIT_PRODUCT",
        product
    }
};

let deleteProduct = function (product) {
    return {
        type: "DELETE_PRODUCT",
        product
    }
};

module.exports = {addProduct, editProduct, deleteProduct};