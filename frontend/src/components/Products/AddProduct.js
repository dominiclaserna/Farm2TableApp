  import React, { useState } from 'react';
  import axios from 'axios';
  import shortid from 'shortid';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  const SaveProduct = () => {
    const [formData, setFormData] = useState({
      productId: '',
      productName: '',
      productType: '',
      productPictureUrl: '',
      productPrice: '',
      productDescription: '',
      quantity: '',
    });
  
  

  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSaveProduct = async (e) => {
      e.preventDefault();
    
      const productId = shortid.generate();
    
      try {
        const postData = {
          ...formData,
          productId,
        };
    
        await axios.post('http://localhost:3001/saveProduct', postData);
    
        // Display success toast
        toast.success('Product added successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            fontSize: '18px',
            padding: '20px',
            zIndex: 10000,
          },
        });
    
        // Clear the form data after successful addition
        setFormData({
          productId: '',
          productName: '',
          productType: '',
          productPictureUrl: '',
          productPrice: '',
          productDescription: '',
          quantity: '',
        });
    
        console.log('Product saved successfully');
      } catch (error) {
        console.error('Save product error:', error);
      }
    };
    
  return (
    <div className="container mt-5 px-5 py-4 main-panel" style={{ backgroundColor: '#4CAF50', boxShadow: '20px 20px 10px #555', padding: '10px' }}>
      <h2 className="text-white mb-4">Add New Product</h2>
      <form onSubmit={handleSaveProduct}>
        <div className="form-group mb-3">
          <label className="text-white">Product Name:</label>
          <input
            type="text"
            className="form-control"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="form-group mb-3">
          <label className="text-white">Product Type:</label>
          <select
            className="form-control"
            name="productType"
            value={formData.productType}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="Crop">Crop</option>
            <option value="Poultry">Poultry</option>
          </select>
        </div>
  
        <div className="form-group mb-3">
          <label className="text-white">Product Description:</label>
          <input
            type="text"
            className="form-control"
            name="productDescription"
            value={formData.productDescription}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="form-group mb-3">
          <label className="text-white">Product Quantity:</label>
          <input
            type="text"
            className="form-control"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="form-group mb-3">
          <label className="text-white">Product Price:</label>
          <input
            type="text"
            className="form-control"
            name="productPrice"
            value={formData.productPrice}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="form-group mb-3">
          <label className="text-white">Product Picture URL:</label>
          <input
            type="text"
            className="form-control"
            name="productPictureUrl"
            value={formData.productPictureUrl}
            onChange={handleChange}
            required
          />
        </div>
  
        <button type="submit" className="btn btn-success">
          Save Product
        </button>
      </form>
  
      
      <ToastContainer />
    </div>
  );
  
};

export default SaveProduct;
