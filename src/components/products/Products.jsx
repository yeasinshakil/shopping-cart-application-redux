import React from 'react';
import ProductItem from './ProductItem';
import ProductAdd from './ProductAdd';
import { useSelector } from 'react-redux';

const Products = () => {
    // const initialProduct = useSelector((state)=> console.log(state))
    return (
        <div className="py-16">
            <div className='productWrapper'>

                <div className="productContainer" id="lws-productContainer">

                    <ProductItem />

                </div>
                <ProductAdd />
            </div>

        </div>

    );
};

export default Products;