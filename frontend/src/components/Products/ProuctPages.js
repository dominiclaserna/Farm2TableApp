import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/getProducts');
      setProducts(response.data);
    } catch (error) {
      console.error('Fetch products error:', error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []); // This ensures that the products are fetched once when the component mounts

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}> {product.productName} {product.productType}
          <img src={product.productPictureUrl} alt={product.productName} />
          </li>
          // Adjust this based on your actual product structure
        ))}
      </ul>
    </div>
  );
};

export default Products;
