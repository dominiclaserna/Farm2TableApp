import React, {  useEffect } from 'react';
import { useShoppingCart } from './ShoppingCart';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const AdminView = () => {
  const { products, shoppingCart, handleRemoveFromCart } = useShoppingCart();

  // Watch for changes in shoppingCart and update local storage
  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }, [shoppingCart]);




  const handleRemoveProduct = async (productId) => {
    try {
      await axios.post('http://localhost:3001/deleteProduct', productId);
 
     handleRemoveFromCart(productId);
      console.log('Product removed successfully');
    } catch (error) {
      console.error('Save product error:', error);
    }
  };


  return (
    
    <div className="container mt-4">
      
      <h2>Current Market Products</h2>
      <div className="row">
      {products
  .map((product) => (
    <div key={product._id} className="col-md-3 mb-2">
      <div
        className="card text-white"
        style={{ backgroundColor: '#D4A373' }}
      >
        <img
          src={product.productPictureUrl}
          alt={product.productName}
          className="card-img-top"
          style={{ maxHeight: '150px', objectFit: 'cover' }}
        />
        <div className="card-body ">
          <h5 className="card-title">{product.productName}</h5>
          <p className="card-text">Available: {product.quantity}</p>
          <p className="card-text">${product.productPrice}</p>
          <button
            onClick={() => handleRemoveProduct(product._id)}
            className="btn btn-light"
          >
            Remove Item From Market
          </button>
        </div>
      </div>
    </div>
  ))}

</div>
</div>
  );
};



export default AdminView;
