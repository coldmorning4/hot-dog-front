let Map = require("immutable").Map;

let reducer = function(state = Map(), action) {
    switch (action.type) {
        case "SET_STATE":
            return state.merge(action.state);
        case "ADD_PRODUCT":
            return state.update("products", (products) => [...products, action.product]);
        case "EDIT_PRODUCT":
            return state.update("products",
                products => products.map((product)=>product.id===action.product.id?action.product:product)
                );
        case "DELETE_PRODUCT":
            return state.update("products",
                products => products.filter((product) => product.id !== action.product.id)
            );
    }
    return state;
}
export default reducer;