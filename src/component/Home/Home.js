import React from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import Products from '../Products/Products';
import './Home.css'
const Home = () => {
    const [products, setProducts] = useProduct();
    return (
        <div >
           <div className="grid grid-cols-2 gap-5 p-9">
           <div className='text'>
               <h2 className='text-6xl font-sans font-bold'>Your New Choice</h2>

               <h2><span className='text-amber-600 text-6xl font-sans font-bold'>Your Best Choice</span></h2>
               <p className='font-medium'>very good quality backpack. Spacious enough to hold A4 size text books. The 3 compartments make organisation easy.<br/> Straps are very comfortable. </p>
               <button className='border bg-orange-300 px-6 p-2'>Live demo</button>
           </div>
           <div className='w-50 h-50'>
               <img src="https://cdn.mukama.com/c/9-moodpic_large/bags.jpg" alt="" />
            </div>
           </div>
            <h2 className='text-2xl font-semibold font-sans m-12 text-center'>Customar Review(3)</h2>
            <div className='grid grid-cols-3 gap-8'>
                {
                   products.slice(0, 3).map(product => <Products
                    key={product.id}
                    product={product}
                    ></Products>)   
                }
            </div>
            <Link to='/reviews'
                className='py-2 px-3 text-white mt-3 rounded bg-orange-300'>
                    See All Reviews
            </Link>
        </div>
    );
};

export default Home;





