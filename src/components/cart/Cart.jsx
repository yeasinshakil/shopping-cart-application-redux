import React from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
    const initialCartState = useSelector(state => state.cartReducer)
    const totalPrice = initialCartState.reduce((total, item)=> (item.lws_inputPrice * item.cartQuantity) + total, 0)
    return (
        <main className="py-16">
            <div className="container 2xl:px-8 px-2 mx-auto">
                <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
                <div className="cartListContainer">
                    {/* Cart Products */}
                    {initialCartState.map((item, index) => (

                        <CartItem cart={item} key={index} />
                    ))}

                    {/* <!-- Bill Details --> */}
                    <div>
                        <div className="billDetailsCard">
                            <h4 className="mt-2 mb-8 text-xl font-bold text-center">Bill Details</h4>
                            <div className="space-y-4">
                                {/* <!-- sub total --> */}
                                <div className="flex items-center justify-between">
                                    <p>Sub Total</p>
                                    <p>BDT <span className="lws-subtotal">{totalPrice}</span></p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>Discount</p>
                                    <p>BDT <span className="lws-discount">0</span></p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>VAT</p>
                                    <p>BDT <span className="vat">0</span></p>
                                </div>
                                <div className="flex items-center justify-between pb-4">
                                    <p className="font-bold">TOTAL</p>
                                    <p className="font-bold">BDT <span className="lws-total">{totalPrice}</span></p>
                                </div>
                                <button className="placeOrderbtn">place order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Cart;