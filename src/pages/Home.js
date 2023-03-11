import React from 'react';
import Products from '../components/product';

const Home = () => {
    return (
        <div>
            <h2 className="heading">Welcome to online shopping</h2>
            <section>
                <h3>Products</h3>
                <Products />
            </section>
        </div>
    );
};

export default Home;
