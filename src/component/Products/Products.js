
import React from 'react';

const Products = (props) => {
    const {name, comment, rating} = props.product;
     return (
        <div className='shadow rounded-2xl bg-white mb-12 text-left p-12'>
             <h4 className='text-xl font-sans font-medium'>Name: {name}</h4>   
             <p>Review: {comment}</p>
            <p>Rating: {rating}</p>
        </div>
        
    );
};

export default Products;