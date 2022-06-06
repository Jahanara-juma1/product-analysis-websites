import React from 'react';
import useProduct from '../../hooks/useProduct';
import Products from '../Products/Products';
import './Reviews.css';

const Reviews = () => {
    const [products, setProducts] = useProduct();
    
    return (
        <div className='cart'>
            
            {
              products.map(product => <Products
              key={product.id}
              product={product}
              ></Products>)  
            }
        </div>
    );
};

export default Reviews;