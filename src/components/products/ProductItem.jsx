import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cart/action';

const ProductItem = ({ product }) => {
    // const [quantity, setQuantity] = useState(parseFloat(product.lws_inputQuantity))
    const dispatch = useDispatch()


    const handleAddCart = () => {

        dispatch(addToCart(product))
        
        console.log('product added to cart========>>>>');
    }


    return (
        <div className="lws-productCard">
            <img className="lws-productImage" src={product.lws_inputImage} alt="product" />
            <div className="p-4 space-y-2">
                <h4 className="lws-productName">{product.lws_inputName
                }</h4>
                <p className="lws-productCategory">{product.lws_inputCategory
                }</p>
                <div className="flex items-center justify-between pb-2">
                    <p className="productPrice">BDT <span className="lws-price">{product.lws_inputPrice
                    }</span></p>
                    <p className="productQuantity">QTY <span className="lws-quantity">{product.lws_inputQuantity
                    }</span></p>
                </div>
                <button className="lws-btnAddToCart" disabled={product.lws_inputQuantity <= 0} onClick={handleAddCart}>Add To Cart</button>
            </div>
        </div>
    );
};

export default ProductItem;