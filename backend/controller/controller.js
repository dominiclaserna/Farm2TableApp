import ProduceModel from '../model/productModel.js';
import User from '../model/userModel.js';
import OrderModel from '../model/orderModel.js';
import bcrypt from 'bcrypt';
import shortid from 'shortid';
import { Types } from 'mongoose';

const { ObjectId } = Types;


const generateId = shortid.generate();

// get all products
const getProducts = async (req, res) => {
  try {
    const products = await ProduceModel.find({});
    console.log("getProducts successful");
    res.status(200).json(products);
  } catch (error) {
    console.error("getProducts error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// get all products that are crops
const getProductsCrops = async (req, res) => {

 
  try {
    const products = await ProduceModel.find({  productType: 'Crop'});
    console.log("getProducts successful");
    res.status(200).json(products);
  } catch (error) {
    console.error("getProducts error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



const saveProduct = async (req, res) => {
  try {
      // Check if all required fields are present in the request body
      const requiredFields = [
          'productId',
          'productName',
          'productType',
          'productPictureUrl',
          'productPrice',
          'productDescription',
          'quantity',
      ];

      for (const field of requiredFields) {
          if (!req.body[field]) {
              // If any required field is missing, respond with an error
              return res.status(400).json({ error: `Missing required field: ${field}` });
          }
      }

      // Create a new product with the provided data
      const newProduct = new ProduceModel({
          productId: req.body.productId,
          productName: req.body.productName,
          productType: req.body.productType,
          productPictureUrl: req.body.productPictureUrl,
          productPrice: req.body.productPrice,
          productDescription: req.body.productDescription,
          quantity: req.body.quantity,
      });

      // Save the new product
      await newProduct.save();

      // Respond with success
      res.status(200).json({ inserted: true });
  } catch (error) {
      // Catch any unexpected errors and respond with a generic error message
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

  
// { productId: '656b6ab64c4e851028c69520', updatedFields: { productPrice: 15 } },
// { productId: '656b303a507e1cf47a480dbe', updatedFields: { quantity: 50 } },


//The server will send in an object with _id and new-quan
const updateProduct = async (req, res) => {
  try {
    // Assuming req.body has _id and new quantity
    const { productId, quantity } = req.body;

    // Use updateOne to update the specific product by its ID
    const result = await ProduceModel.updateOne({ productId: productId }, { $set: { quantity: quantity } });

    console.log(`Product with ID ${_id} updated successfully`);
    
    // Respond with success
    res.status(200).json({ updated: true, result });
  } catch (error) {
    // Catch any errors and respond with a generic error message
    console.error("updateProduct error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const result = await ProduceModel.deleteOne({ productId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    console.log(`Product with ID ${productId} deleted successfully`);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: 'Error deleting product' });
  }
};



  const updateMultipleProducts = async (req, res) => {
    try {
      // Assuming req.body.products is an array of objects with updates
      const productsToUpdate = req.body.products;
  
      for (const productUpdate of productsToUpdate) {
        // Assuming each productUpdate has a productId and fields to update
        const { productId, updatedFields } = productUpdate;
  
        // Use findByIdAndUpdate to update the specific product by its ID
        await ProduceModel.findByIdAndUpdate(productId, { $set: updatedFields });
  
        console.log(`Product with ID ${productId} updated successfully`);
      }
  
      // Respond with success
      res.status(200).json({ updated: true });
    } catch (error) {
      // Catch any errors and respond with a generic error message
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
// functions for the signup page  requires all the user information

const signup = async (req, res) => {
  const {  email, password,  firstName ,
    lastName,
     } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new User({ userId: generateId, firstName, lastName, userType: "user", email, password: hashedPassword });
    await newUser.save();
    console.log("Successful signup for user:", email);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
};

// functions for the login page require

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email:email });

    if (!user) {
      console.error("User not found for email:", email);
      return res.status(404).json({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      console.error("Invalid credentials for user:", email);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    console.log("Successful login for user:", email);
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: 'Error logging in' });
  }
};


const getUsers = async (req, res) => {
  try {
    const users = await User.find({}); // Fetch all users from the database
    res.status(200).json(users);
  } catch (error) {
    console.error("getAllUsers error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


const getUserByEmail = async (req, res) => {
  const { email } = req.query;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      console.error("User not found for email:", email);
      return res.status(404).json({ message: 'User not found' });
    }

    console.log("Successful getting user:", email);
    res.status(200).json({ user }); // Return the user data
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ message: 'Error getting user' });
  }
};



const addOrders = async (req, res) => {
  const orders = req.body;

  try {
    // Validate if orders is an array
    if (!Array.isArray(orders)) {
      return res.status(400).json({ message: 'Invalid input. Expected an array of orders.' });
    }

    // Create an array of OrderModel instances
    const orderInstances = orders.map((order) => new OrderModel(order));

    // Save all orders to the database
    await OrderModel.insertMany(orderInstances);

    res.status(201).json({ message: 'Orders added successfully' });
  } catch (error) {
    console.error('Error adding orders:', error);
    res.status(500).json({ message: 'Error adding orders to system' });
  }
};



// functions for getting all the orders


const getOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find({});
    res.status(200).json(orders);
  } catch (error) {
    console.error("get Allorders error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getOrdersForUser = async (req, res) => {
  try {
    const userId = req.query.userId; 
    const orders = await OrderModel.find({ userId: userId });
    res.status(200).json(orders);
  } catch (error) {
    console.error("getOrdersForUser error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


const updateOrderStatus = async (req, res) => {
  try {
    const { _id } = req.body;

    const result = await OrderModel.updateOne({ _id:_id}, { $set: { orderStatus: 0 } });

    console.log(`Order with ID ${_id} updated successfully`);

  } catch (error) {
    // Catch any errors and respond with a generic error message
    console.error("updateOrderStatus error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const changeOrderStatus = async (req, res) => {
  try {
    const { _id } = req.body;``
    const result = await OrderModel.updateOne({ _id:_id}, { $set: { orderStatus: 1 } });

    console.log(`Order with ID ${_id} updated successfully`);
    
   
  } catch (error) {
    // Catch any errors and respond with a generic error message
    console.error("changeOrderStatus error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export { changeOrderStatus,deleteProduct, getProducts, saveProduct, getProductsCrops, updateProduct, signup, login, getUsers, getOrders, addOrders, getOrdersForUser, getUserByEmail, updateOrderStatus };
