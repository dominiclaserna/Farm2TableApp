import React, {  useEffect } from 'react';
import { useShoppingCart } from './ShoppingCart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const CreateOrderPoultry = () => {
  const { products, shoppingCart, handleAddToOrder, handleClearCart,handleRemoveFromCart } = useShoppingCart();

  // Watch for changes in shoppingCart and update local storage
  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  return (
    
    <div className="container mt-4">
      
      <h2>Fresh From the Farmers!</h2>
      <div className="row">
      {products
  .filter(product => product.productType === 'Poultry')
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
          style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
        <div className="card-body ">
          <h5 className="card-title">{product.productName}</h5>
          <p className="card-text">Available: {product.quantity}</p>
          <p className="card-text">${product.productPrice}</p>
          <button
            onClick={() => handleAddToOrder(product._id)}
            className="btn btn-light"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ))}

         <ToastContainer />
      </div>

      <div className="mb-4">
  <h2 className="display-3 font-weight-bold">Your Cart</h2>
  <h3 className="display-5">Number of Products In Cart: {shoppingCart.length}</h3>
</div>

      
      <button
        onClick={handleClearCart}
        className="btn btn-dark mb-5"
      >
        Clear the Cart
      </button>
      <div className="row">
        {shoppingCart.map((productId) => {
          const product = products.find((p) => p._id === productId);

          return (
            <div key={productId} className="col-3 mb-4">
              <div
                className="card text-black"
                style={{ backgroundColor: '#CCD5AE' }}
              >
                {product ? (
                  <>
                    <img
                      src={product.productPictureUrl}
                      alt={product.productName}
                      className="card-img-top"
                      style={{ maxHeight: '150px', objectFit: 'cover' }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{product.productName}</h6>
                      <p className="card-text">{product.productDescription}</p>


                      <button
                        onClick={() => handleRemoveFromCart(productId)}
                        className="btn btn-danger mt-2 mb-5"
                      >
                        Remove from Cart
                      </button>


                    </div>







                  </>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};



export default CreateOrderPoultry;
