import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../redux/products/action';

const ProductAdd = () => {
    const [productInfo, setProductInfo] = useState({})
    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        const value = e.target.value;
        setProductInfo({
            ...productInfo,
            [e.target.id]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addProduct(productInfo))

    }
    // console.log(productInfo)
    return (
        <div className="formContainer">
            <h4 className="formTitle">Add New Product</h4>
            <form className="space-y-4 text-[#534F4F]" id="lws_addProductForm" onSubmit={handleSubmit}>

                <div className="space-y-2">
                    <label htmlFor="lws-inputName">Product Name</label>
                    <input className="addProductInput" id="lws_inputName" type="text" required onChange={handleOnChange} />
                </div>

                <div className="space-y-2">
                    <label htmlFor="lws-inputCategory">Category</label>
                    <input className="addProductInput" id="lws_inputCategory" type="text" onChange={handleOnChange} required />
                </div>

                <div className="space-y-2">
                    <label htmlFor="lws-inputImage">Image Url</label>
                    <input className="addProductInput" id="lws_inputImage" type="text" onChange={handleOnChange} required />
                </div>
                <div className="grid grid-cols-2 gap-8 pb-4">
                    <div className="space-y-2">
                        <label htmlFor="ws-inputPrice">Price</label>
                        <input className="addProductInput" type="number" id="lws_inputPrice" onChange={handleOnChange} required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="lws-inputQuantity">Quantity</label>
                        <input className="addProductInput" type="number" id="lws_inputQuantity" onChange={handleOnChange} required />
                    </div>
                </div>
                <button type="submit" id="lws-inputSubmit" className="submit bg-slate-700">Add Product</button>
            </form>
        </div>

    );
};

export default ProductAdd;