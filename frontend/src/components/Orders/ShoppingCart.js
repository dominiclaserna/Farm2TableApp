import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

// Create a context for the shopping carts
const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState(() => {
    const savedCart = localStorage.getItem('shoppingCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getProducts');
        setProducts(response.data);
      } catch (error) {
        console.error('Fetch products error:', error);
      }
    };

    fetchAllProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  const handleAddToOrder = (productId) => {
    const isInCart = shoppingCart.some((item) => item === productId);
    
    // Display success toast
    
    if (!isInCart) {
      toast.success('Product added to the cart!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          fontSize: '18px', // Adjust the font size
          padding: '20px', // Increase padding for a bigger size
          zIndex: 10000, // Set a higher z-index to bring it to the front
        },
      });
      setShoppingCart((prevCart) => [...prevCart, productId]);
      console.log('Product added to the shopping cart:', productId);
    } else {
      toast.success('Product is already in the cart!', {
        position: 'top-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          fontSize: '18px', // Adjust the font size
          padding: '20px', // Increase padding for a bigger size
          zIndex: 10000, // Set a higher z-index to bring it to the front
        },
      });
    
      console.log('Product is already in the shopping cart');
    }
  };

  const handleRemoveFromCart = (productId) => {
    setShoppingCart((prevCart) => prevCart.filter((item) => item !== productId));
    console.log('Product removed from the shopping cart:', productId);
  };

  const handleClearCart = () => {
    setShoppingCart([]);
  };

  return (
    <ShoppingCartContext.Provider value={{ products, shoppingCart, handleAddToOrder, handleRemoveFromCart, handleClearCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export { ShoppingCartProvider, useShoppingCart };
