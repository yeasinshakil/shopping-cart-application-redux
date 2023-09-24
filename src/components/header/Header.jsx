import React from 'react';
import {BiSolidShoppingBag} from 'react-icons/bi'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const initialCartState = useSelector(state => state.cartReducer)
    const totalItemCount  = initialCartState.reduce((total, item)=> (item.cartQuantity + total), 0)
    return (
        <nav className="bg-[#171C2A] py-4">
            <div className="navBar">
                <Link to={'/'}>
                    <img src={logo} alt="LWS" className="max-w-[140px]" />
                </Link>

                <div className="flex gap-4">
                    
                    <Link to='/' className="navHome" id="lws-home"> Home </Link>
                    <Link to='/cart' className="navCart" id="lws-cart">
                        <BiSolidShoppingBag className=' text-xl' />
                        <span id="lws-totalCart">{totalItemCount}</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;