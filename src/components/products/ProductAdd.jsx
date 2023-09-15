import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../redux/products/action';

const ProductAdd = () => {
    const [productInfo, setProductInfo] = useState({})
    const dispatch = useDispatch()
    const id = useSelector(state => state.length + 1)

    const handleOnChange = (e) => {
        const value = e.target.value;
        setProductInfo({
            ...productInfo,
            [e.target.id]: value, id: id,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addProduct(productInfo))
        setProductInfo({})

    }
    // console.log(productInfo)
    return (
        <div className="formContainer">
            <h4 className="formTitle">Add New Product</h4>
            <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm" onSubmit={handleSubmit}>

                <div className="space-y-2">
                    <label htmlFor="lws-inputName">Product Name</label>
                    <input className="addProductInput" id="lws-inputName" type="text" required onBlur={handleOnChange} />
                </div>

                <div className="space-y-2">
                    <label htmlFor="lws-inputCategory">Category</label>
                    <input className="addProductInput" id="lws-inputCategory" type="text" onBlur={handleOnChange} required />
                </div>

                <div className="space-y-2">
                    <label htmlFor="lws-inputImage">Image Url</label>
                    <input className="addProductInput" id="lws-inputImage" type="text" onBlur={handleOnChange} required />
                </div>
                <div className="grid grid-cols-2 gap-8 pb-4">
                    <div className="space-y-2">
                        <label htmlFor="ws-inputPrice">Price</label>
                        <input className="addProductInput" type="number" id="lws-inputPrice" onBlur={handleOnChange} required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="lws-inputQuantity">Quantity</label>
                        <input className="addProductInput" type="number" id="lws-inputQuantity" onBlur={handleOnChange} required />
                    </div>
                </div>
                <button type="submit" id="lws-inputSubmit" className="submit bg-slate-700">Add Product</button>
            </form>
        </div>

    );
};

export default ProductAdd;