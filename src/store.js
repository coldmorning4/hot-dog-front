import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import productsReducer from "./app/reducer.jsx";
const reducer = combineReducers({
    products: productsReducer,
    form: reduxFormReducer, // mounted under "form"

});
const store = (window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore)(reducer);

export default store;
