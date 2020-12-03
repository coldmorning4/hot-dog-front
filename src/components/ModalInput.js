import React, {Fragment, useState} from 'react';
import Modal from "react-modal";
import {Field, reduxForm} from "redux-form";

let actions = require("../app/actions.jsx");
let connect = require("react-redux").connect;

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
const ModalInput = props => {
    const {header, pristine, reset, submitting} = props;

    const [modalIsOpen, setIsOpen] = React.useState(false);

    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const onSubmitForm = async e => {
        e.preventDefault()
        try {
            const body = {image, name, title, description};
            const response = await fetch(`https://hot-dog-projectreact.herokuapp.com/products`,
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                });

            const jsonData = await response.json();
            props.addProduct(jsonData);
            closeModal();

            console.log(response)
        } catch (err) {
            console.log(err.message)
        }
    }

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Fragment>
            <div>

                <div className="input_product" onClick={openModal}>{header}</div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    appElement={document.getElementById('root')}
                >
                    <div>Add new hot-dog</div>
                    <form className="form-input-modal" onSubmit={onSubmitForm}>
                        <br/>

                        <div>
                            <label>Name</label>
                            <div>
                                <Field
                                    name="name"
                                    className="form-modal"
                                    component="input"
                                    placeholder="Name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                        </div>

                        <br/>

                        <div>
                            <label>Title</label>
                            <div>
                                <Field
                                    name="title"
                                    className="form-modal"
                                    component="input"
                                    placeholder="Title"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </div>
                        </div>

                        <br/>

                        <div>
                            <label>Description</label>
                            <div>
                                <Field
                                    name="description"
                                    className="form-modal"
                                    component="input"
                                    placeholder="Description"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label>Image</label>
                            <div>
                                <Field
                                    name="image"
                                    className="form-modal"
                                    component="input"
                                    placeholder="Image"
                                    value={image}
                                    onChange={e => setImage(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <button className="form-button" type="submit" onSubmit={onSubmitForm}
                                    disabled={pristine || submitting}>Add
                            </button>
                            <button className="form-button" type="button" disabled={pristine || submitting}
                                    onClick={reset}>
                                No Thanks
                            </button>
                        </div>

                    </form>

                </Modal>

            </div>
        </Fragment>

    );
};

function mapStateToProps(state) {
    return {
        products: state.products
    };
}

export default reduxForm({
    form: 'simple', // a unique identifier for this form
})(connect(mapStateToProps, actions)(ModalInput));