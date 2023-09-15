import React from 'react';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';

const CartItem = () => {
    return (
        <div className="space-y-6">
            {/* <!-- Cart Item --> */}
            <div className="cartCard">
                <div className="flex items-center col-span-6 space-x-6">
                    {/* <!-- cart image --> */}
                    <img className="lws-cartImage" src="https://i.dummyjson.com/data/products/40/thumbnail.jpg" alt="product" />
                    {/* <!-- cart item info --> */}
                    <div className="space-y-2">
                        <h4 className="lws-cartName">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptop</h4>
                        <p className="lws-cartCategory">Men's clothing</p>
                        <p>BDT <span className="lws-cartPrice">1100</span></p>
                    </div>
                </div>
                <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                    {/* <!-- amount buttons --> */}
                    <div className="flex items-center space-x-4">
                        <button className="lws-incrementQuantity">
                           <AiOutlinePlus />
                        </button>
                        <span className="lws-cartQuantity">2</span>
                        <button className="lws-decrementQuantity">
                            <AiOutlineMinus />
                        </button>
                    </div>
                    {/* <!-- price --> */}
                    <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">2200</span></p>
                </div>
                {/* <!-- delete button --> */}
                <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                    <button className="lws-removeFromCart">
                        <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
            {/* <!-- Cart Items Ends --> */}

        </div>
    );
};

export default CartItem;