import React, { useState, useEffect } from 'react';
import { useShoppingCart } from './ShoppingCart';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useAuth } from '../Authorization/AuthContext'
import shortid from 'shortid';
// import Navbar from '../Navigation/Navbar';

const ShoppingCartPage = () => {
  const { products, shoppingCart, handleClearCart, handleRemoveFromCart } = useShoppingCart();
  const [productQuantities, setProductQuantities] = useState({});
  const [finalizedOrders, setFinalizedOrders] = useState([]);
  const { user } = useAuth();

  const getProductById = (productId) => {
    return products.find((p) => p._id === productId);
  };

  const getTotalPrice = () => {
    return shoppingCart.reduce((total, productId) => {
      const product = getProductById(productId);
      const quantity = productQuantities[productId] || 1
      return total + (product?.productPrice || 0) * quantity;
    }, 0);
  };
  const finalizeOrder = async () => {
    const generateId = shortid.generate();
    try {
      const currentOrder = shoppingCart.map(async (productId) => {
        const product = getProductById(productId);  
        return {
          userId: user?.userId,
          orderStatus: 1,
          transactionId: generateId,
          productId: productId,
          productName: product?.productName,
          productType: product?.productType,
          quantity: productQuantities[productId] || 1,
        };
      });
  
      // Wait for all promises to resolve
      const orderData = await Promise.all(currentOrder);
  
      // Save the orders to the backend
      const response = await axios.post('http://localhost:3001/addOrders', orderData);
  
      // Ensure that response.data is an array
      const finalizedOrdersArray = Array.isArray(response.data) ? response.data : [];
  
      setFinalizedOrders(finalizedOrdersArray);
      handleClearCart();
      setProductQuantities({});
    } catch (error) {
      console.error('Error finalizing order:', error);
    }
  };
  
  
  const handleQuantityChange = (event, productId) => {
    const newQuantity = parseInt(event.target.value, 10);
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  useEffect(() => {
    // Ensure that user data is available before rendering the component
    console.log({ user });
    if (user) {
      console.log('User data available:', user);
    }
  }, [user]);


  return (
    <div className="container mt-4">
       {/* <Navbar> </Navbar> */}
<h2>Hello, {user?.firstName || 'Guest'}! Shopping Cart</h2>

      <button onClick={handleClearCart} className="btn btn-dark mb-3">
        Clear the Cart
      </button>
      <div className="row">
        {shoppingCart.map((productId) => {
          const product = getProductById(productId);

          return (
            <div key={productId} className="col-3 mb-4">
              <div
                className="card text-white"
                style={{ backgroundColor: '#D4A373' }}
              >
                {product && (
                  <>
                    <img
                      src={product.productPictureUrl}
                      alt={product.productName}
                      className="card-img-top"
                      style={{ maxHeight: '150px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{product.productName}</h6>
                      <p className="card-text">{product.productType}</p>
                      <h5 className="card-text">{product.quantity}</h5>
                      <p className="card-text">{product.productDescription}</p>
                    


                      {/* Input for quantity */}
                      <input
                        type="number"
                        value={productQuantities[productId] || 1}
                        min="1"
                        max={product?.quantity || 1}
                        onChange={(e) => handleQuantityChange(e, productId)}
                        className="form-control form-control-sm"
                      />

                      {/* Display total price */}
                      <p className="mt-2">
                        Total Price: ${product?.productPrice * (productQuantities[productId] || 1) || 0}
                      </p>

                      {/* Remove from Cart button */}
                      <button
                        onClick={() => handleRemoveFromCart(productId)}
                        className="btn btn-danger mt-2"
                      >
                        Remove from Cart
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Display total price for all products */}
      <h4>Total Price for All Products: ${getTotalPrice()}</h4>

      <div className="card mt-4 border-success">
  <div className="card-body">
    <h5 className="card-title text-center text-success display-5 mb-4">Ready To Check Out?</h5>

    {finalizedOrders.map((order, index) => (
      <div key={index} className="mb-3">
        <p className="mb-0">
          Order {index + 1} Total: $
          {order.reduce((orderTotal, item) => {
            const product = getProductById(item.productId);
            return orderTotal + (product?.productPrice || 0) * item.quantity;
          }, 0)}
        </p>
      </div>  
    ))}

    <button onClick={finalizeOrder} className="btn btn-success btn-block">
      Finalize Order
    </button>
  </div>
</div>

    </div>
  );
};

export default ShoppingCartPage;







