import React, {Fragment} from 'react';
import {Field, reduxForm} from "redux-form";

let actions = require("../app/actions.jsx");
let connect = require("react-redux").connect;


const EditProduct = ({handleSubmit, onSubmit}) => {

    return (
        <Fragment>
            <div>

                <form className="form-input-modal" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div>
                            <Field
                                name="image"
                                className="form-input-modal"
                                component="input"
                                placeholder="Image"
                            />
                        </div>
                        <br/>
                        <div>
                            <Field
                                name="name"
                                className="form-input-modal"
                                component="input"
                                placeholder="Name"
                            />
                        </div>
                        <br/>
                        <div>
                            <Field
                                name="title"
                                className="form-input-modal"
                                component="input"
                                placeholder="Title"
                            />
                        </div>
                        <br/>
                        <div>
                            <Field
                                name="description"
                                contenteditable="true"
                                className="description-form"
                                component="textarea"
                                placeholder="Description"
                            />
                        </div>
                    </div>
                    <div>
                        <button className="product_button_upgrade"
                                type="submit"
                                onClick={handleSubmit(values =>
                                    onSubmit({
                                        ...values,
                                        action: 'update',
                                    }))}

                        >
                            Upgrade
                        </button>
                    </div>
                    <div>
                        <button className="product_button_delete"
                                type="submit"
                                onClick={handleSubmit(values =>
                                    onSubmit({
                                        ...values,
                                        action: 'delete',
                                    }))}
                        >
                            Delete
                        </button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

export default reduxForm({
    form: 'product',

})(EditProduct);