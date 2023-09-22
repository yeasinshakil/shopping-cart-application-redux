import React from 'react';
import {AiOutlinePlus, AiOutlineMinus, AiOutlineDelete} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { decreaseFromCart } from '../../redux/cart/action';

const CartItem = ({cart}) => {
    const {lws_inputName, lws_inputImage, lws_inputCategory, cartQuantity, id, lws_inputPrice, lws_inputQuantity} = cart;
    const dispatch = useDispatch();
    const decreaseFromCartHandle=(cart)=> {
        console.log("remove product")
        dispatch(decreaseFromCart(cart))
    }
    return (
        <div className="space-y-6">
            {/* <!-- Cart Item --> */}
            <div className="cartCard">
                <div className="flex items-center col-span-6 space-x-6">
                    {/* <!-- cart image --> */}
                    <img className="lws-cartImage" src={lws_inputImage} alt="product" />
                    {/* <!-- cart item info --> */}
                    <div className="space-y-2">
                        <h4 className="lws-cartName">{lws_inputName}</h4>
                        <p className="lws-cartCategory">{lws_inputCategory}</p>
                        <p>BDT <span className="lws-cartPrice">{lws_inputPrice}</span></p>
                    </div>
                </div>
                <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                    {/* <!-- amount buttons --> */}
                    <div className="flex items-center space-x-4">
                        <button className="lws-incrementQuantity">
                           <AiOutlinePlus />
                        </button>
                        <span className="lws-cartQuantity">{cartQuantity}</span>
                        <button className="lws-decrementQuantity" onClick={()=> decreaseFromCartHandle(cart)}>
                            <AiOutlineMinus />
                        </button>
                    </div>
                    {/* <!-- price --> */}
                    <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{lws_inputPrice}</span></p>
                </div>
                {/* <!-- delete button --> */}
                <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                    <button className="lws-removeFromCart text-lg text-red-800 hover:text-white bg-red-400 rounded-full p-1">
                        <AiOutlineDelete />
                        
                    </button>
                </div>
            </div>
            {/* <!-- Cart Items Ends --> */}

        </div>
    );
};

export default CartItem;