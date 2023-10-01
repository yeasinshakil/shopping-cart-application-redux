import React from 'react';
import ProductItem from './ProductItem';
import ProductAdd from './ProductAdd';
import { useSelector } from 'react-redux';

const Products = () => {
    const initialProduct = useSelector(state => state.productReducer)

    return (
        <div className="py-16">
            <div className='productWrapper'>

                <div className="productContainer" id="lws-productContainer">
                    {
                        initialProduct.length > 0 ? initialProduct.map(productItem => (<ProductItem product={productItem} key={productItem.id} />)) : ("No Products added, please add a product")

                    }

                </div>
                <ProductAdd />
            </div>

        </div>

    );
};

export default Products;