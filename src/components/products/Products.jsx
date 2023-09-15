import React from 'react';
import ProductItem from './ProductItem';
import ProductAdd from './ProductAdd';

const Products = () => {
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