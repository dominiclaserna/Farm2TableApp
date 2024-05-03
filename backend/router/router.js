import {changeOrderStatus,updateOrderStatus, getProducts, saveProduct, updateProduct, signup, login, getUsers, addOrders, getOrders, getUserByEmail} from '../controller/controller.js'

const router = (app) =>{

    app.get('/getProducts',getProducts);
    app.post('/saveProduct', saveProduct);
    app.post('/updateProduct/:_id', updateProduct);
    app.post('/signup', signup);
    app.post('/login', login);
    app.get('/getUsers', getUsers);
    app.post('/addOrders', addOrders);
    app.get('/getOrders', getOrders);
    app.get('/getOrdersForUser', getOrders);
    app.get('/get-user', getUserByEmail);
    app.post('/confirmOrder', updateOrderStatus);
    app.post('/changeOrderStatus', changeOrderStatus);
}

export default router;




