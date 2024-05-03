import needle from 'needle';

import shortid from 'shortid';
const productId = shortid.generate();


//needle request for adding an order into the database
// needle.post('http://localhost:3001/addOrder', {
//   userId: "lCtmKz4xA",
//   OrderStatus: "0",
//   transactionId: "trans123",
//   productId: "prod456",
//   productName: "Red HorseRadish",
//   productType: "Crop",
//   quantity: 3
// }, { json: true }, (err, res) => {
//   if (err) {
//     console.error("Error:", err);
//   } else {
//     console.log(res.body);
//   }
// });


// // //needle request for getting all orders inside the database
// needle.get('http://localhost:3001/getOrders', (err, res) => {
//   if (err) {
//     console.error("Error:", err);
//   } else {
//     console.log("All Orders retrieved successfully:", res.body);
//   }
// });



// Test adding user to the User collecions
// needle.post('http://localhost:3001/signup', {
// firstName : "Rendone",
// lastName : "Labradog",
// userType: "Admin",
// email: "Bisaya@gmail.com",
// password: "Bisayawa123"

// }, { json: true }, (err, res) => {
//   if (err) {  
//     console.error("Error:", err);
//   } else {
//     console.log(res.body);
//   }
// });


// needle.post('http://localhost:3001/login', {

// email: "Bisaya@gmail.com",
// password: "Bisayawa123"

// }, { json: true }, (err, res) => {
//   if (err) {
//     console.error("Error:", err);
//   } else {
//     console.log(res.body);
//   }
// });




//     app.post('/getUsers', getUsers);
//GET users
// needle.get('http://localhost:3001/getUsers', (err, res) => {
//   if (err) {
//     console.error("Error:", err);
//   } else {
//     console.log("Users retrieved successfully:", res.body);
//   }
// });



// Test adding products to the database
// needle.post('http://localhost:3001/saveProduct', {
//   productId: productId,
//   productName: "Red HorseRadish",
//   productType: "Crop",
//   productPictureUrl: "https://images.unsplash.com/photo-1528132596460-787bb7adfd5f?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   productPrice: 10,
//   productDescription: "High-quality Red Carrots",
//   quantity: 100,
// }, { json: true }, (err, res) => {
//   if (err) {
//     console.error("Error:", err);
//   } else {
//     console.log(res.body);
//   }
// });

// GET products
// needle.get('http://localhost:3001/getProducts', (err, res) => {
//   if (err) {
//     console.error("Error:", err);
//   } else {
//     console.log("Products retrieved successfully:", res.body);
//   }
// });

// Update product
// needle.post('http://localhost:3001/updateProduct',
//   { productId: '656b9e8964bf83bfaa6c6282', updatedFields: { quantity: 12314 } }, // Assuming productId is used for identification
//   { json: true },
//   (error, response) => {
//     if (!error && response.statusCode === 200) {
//       const result = response.body;
//       console.log('Update Product Response:', result);
//     } else {
//       console.error('Error:', error || response.statusCode);
//     }
//   }
// );

// const productsToUpdate = [
//   { productId: '656b6ab64c4e851028c69520', updatedFields: { productPrice: 15 } },
//   { productId: '656b303a507e1cf47a480dbe', updatedFields: { quantity: 50 } },
//   // Add more products and updates as needed
// ];

// needle.post('http://localhost:3001/updateProducts', { products: productsToUpdate }, (error, response) => {
//   if (!error && response.statusCode === 200) {
//     const result = response.body;
//     console.log('Update Products Response:', result);
//   } else {
//     console.error('Error:', error || response.statusCode);
//   }
// });



// // Test adding a student to the database
// needle.post('http://localhost:3000/save-student',
//  {
//   stdnum: "2020-11888",   
//   fname: "Brandon",
//   lname: "Rum",
//   age: "20"

// }, (err, res) => {
//   console.log(res.body);
// });





// // since name doesnt exist this willl get and error and will not update any student data
// needle.post('http://localhost:3000/update',
//  {
//   fname: "Marne",  

// }, (err, res) => {
//   console.log(res.body);
// });





// c.) POST /remove-user
// Removes a specific user using deleteOne method.
// Example: await Student.deleteOne({stdnum: ‘8051495845’})

// here Mary Jane Parker was deleted
// needle.post('http://localhost:3000/remove-user',
//  {
//   stdnum: "2020-99999"
// }, (err, res) => {
//   console.log(res.body);
// });





// d.) POST /remove-all-user


// needle.post('http://localhost:3000/remove-all-user',
//  {

// }, (err, res) => {
//   console.log(res.body);
// });


// e.) GET /user


// needle.get('http://localhost:3000/user?stdnum="202011234"', (err, res) => {

// console.log(res.body);


// });



// e.) GET /members

// needle.post('http://localhost:3001/login', {email:"bradlee@gmail.com", password: "123123123" } , (err, res) => {
//     if (err) {
//       console.error('Error:', err.message);
//     } else {
//       console.log('Response:', res.body);
//     }
//   });


// });





















