import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <div className='shop-container'>
      <div className='product-container'>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}></Product>
        ))}
      </div>
      <div className='cart-container'>
        <h2>Order Summary</h2>
        <p>Total Items: {cart.length} </p>
      </div>
    </div>
  );
};

export default Shop;
