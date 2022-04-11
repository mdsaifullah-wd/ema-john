import React from 'react';
import './Product.css';

const Product = ({ product }) => {
  const { name, price, img, seller, ratings } = product;
  return (
    <div className='product-card'>
      <div className='product-image'>
        <img src={img} alt='' />
      </div>
      <div className='product-info'>
        <h2 className='product-title' title={name.length <= 15 ? '' : name}>
          {name.length <= 15 ? name : name.slice(0, 15) + '...'}
        </h2>
        <p className='product-price'>Price: {price}</p>
        <small className='product-seller'>Manufacturer: {seller}</small>
        <small className='product-ratings'>Rating: {ratings} Star</small>
      </div>
      <button className='product-btn'>Add to Cart</button>
    </div>
  );
};

export default Product;
