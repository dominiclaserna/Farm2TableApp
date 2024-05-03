// App.js
import React from 'react';
// import router components
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
  Link,
  // Router
} from 'react-router-dom'

// Import Layout Components:
import LoginLayout from './components/layouts/LoginLayout';
import ShopLayout from './components/layouts/ShopLayout';
import CartLayout from './components/layouts/CartLayout';
import OrdersLayout from './components/layouts/OrdersLayout';
import AdminDashboardLayout from './components/layouts/AdminDashboardLayout';
import UserProfileLayout from './components/layouts/UserProfileLayout';
import AdminProfileLayout from './components/layouts/AdminProfileLayout';

// Import Pages Components
import Login from './components/SignUpLoginPage/login';
import Signup from './components/SignUpLoginPage/signup';
import CreateOrder from './components/Orders/createOrder';
import Products from './components/Products/ProuctPages';
import SaveProduct from './components/Products/AddProduct';
import UserListPage from './components/Users/UserListPage'; 
import ShoppingCartPage from './components/Orders/ShoppingCartPage';
import OrderList from './components/Orders/OrdersPage';
import SalesReportPage from './components/Orders/SalesReportPage';
// import ProfileDashboard from './components/Profile/Profile';
import CreateOrderPoultry from './components/Orders/OrderPoultry';
import CreateOrderCrops from './components/Orders/OrderCrops';
import SecurityLogOut from './components/Profile/ProfileLogout';
import OrdersPage from './components/Orders/OrdersPage';
import AdminView from './components/Orders/AdminView';
import UserOrders from './components/Orders/UserOrders';

function HomePage() {
  const homePageStyle = {
    textAlign: 'center',
    backgroundImage: "url('https://images.pexels.com/photos/64296/pexels-photo-64296.jpeg?cs=srgb&dl=pexels-abdulamid-al-fadhly-64296.jpg&fm=jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#4c9f4c', // Very light green shade
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  };

  const buttonStyle = {
    textDecoration: 'none',
    color: '#4c9f4c',
    backgroundColor: '#ffffe0', // Very light yellow shade for buttons
    padding: '12px 30px',
    margin: '10px', // Add margin between the buttons
    borderRadius: '5px',
    fontSize: '18px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.2s ease-in-out',
  };

  const linkContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const hoverEffect = {
    transform: 'scale(1.05)',
  };

  return (
    <div style={homePageStyle}>
    <h1 style={{ color: 'white' }}>Farm 2 Table</h1>
      <div style={linkContainer}>
        <Link to="/login" style={{ ...buttonStyle, ...hoverEffect }}>
          Login
        </Link>
        <Link to="/signup" style={{ ...buttonStyle, ...hoverEffect }}>
          Signup
        </Link>
      </div>
    </div>
  );
}

// Create the BrowserRouter:
const router = createBrowserRouter(
  createRoutesFromElements(
    // Route Tree:
    <Route>
      {/* ---------------------------------------------------------------------------------------------------- */}
      {/* LOGIN AND SIGNUP PAGE */}

      {/* Home page route */}
      <Route path="/" element={<HomePage />} />

      {/* Login and Signup pages */}
      <Route path="/" element={<LoginLayout pageName="Login"/>}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      {/* ---------------------------------------------------------------------------------------------------- */}
      {/* SHOP PAGE FOR CUSTOMER: */}

      {/* Redirect the user from /shop to /shop/crops */}
      <Route path="/shop" element={<Navigate to="/shop/crops"/>} />

      {/* Shop page */}
      <Route path="/shop" element={<ShopLayout />}>
        {/* Add the component as an element attribute to the routes below: element={<Put Component here />} */}
        <Route path="crops" element={<CreateOrderCrops/>} />
        <Route path="poultry-items" element={<CreateOrderPoultry/> } />
      </Route>

      {/* -------------------------------------------------s--------------------------------------------------- */}
      {/* CART PAGE */}
      <Route path="/cart" element={<CartLayout />}>
        <Route index element={<ShoppingCartPage />} />
      </Route>

      {/* ---------------------------------------------------------------------------------------------------- */}
      {/* ORDERS PAGE */}

      {/* Redirect the user from /orders to /orders/to-receive */}
      <Route path="/orders" element={<Navigate to="/orders/to-receive"/>} />

      {/* Orders page */}
      <Route path="/orders" element={<OrdersLayout />}>
        {/* Add the component as an element attribute to the routes below: element={<Put Component here />} */}
        <Route path="to-receive" element={<UserOrders/>} />
        <Route path="completed" element={null} />
      </Route>


    {/* ADMIN PROFILE PAGE */}

      {/* Redirect the user from /profile to /profile/account-info */}
      <Route path="/admin-profile" element={<Navigate to="/admin-profile/account-info"/>} />

      {/* Users Profile Page */}
      <Route path="/admin-profile" element={<AdminProfileLayout />}>
        <Route path="account-info" element={<SecurityLogOut/>} />
      </Route>



      {/* ---------------------------------------------------------------------------------------------------- */}
      {/* ADMIN DASHBOARD PAGE */}
      
      {/* Redirect the user from /admin-dashboard to /admin-dashboard/product-listings */}
      <Route path="/admin-dashboard" element={<Navigate to="/admin-dashboard/product-listings"/>} />

      {/* Admin Dashboard page */}
      <Route path="/admin-dashboard" element={<AdminDashboardLayout />}>
        <Route path="product-listings" element={<AdminView/>} />
        <Route path="order-fulfillment" element={<OrdersPage/>} />
        <Route path="sales-report" element={<SalesReportPage />} />
        <Route path="manage-users" element={<UserListPage />} />
        <Route path="save-product" element={<SaveProduct />} />
      </Route>

      {/* ---------------------------------------------------------------------------------------------------- */}
      {/* USER PROFILE PAGE */}

      {/* Redirect the user from /profile to /profile/account-info */}
      <Route path="/profile" element={<Navigate to="/profile/account-info"/>} />

      {/* Users Profile Page */}
      <Route path="profile" element={<UserProfileLayout />}>
      <Route path="account-info" element={<SecurityLogOut/>} />
      
       
      </Route>


      {/* ---------------------------------------------------------------------------------------------------- */}
      {/* Original Routing: */}
      <Route path="/crop-list" element={<CreateOrderCrops />} />
      <Route path="/poultry-list" element={<CreateOrderPoultry />} />
      <Route path="/order-list" element={<OrderList />} />
      <Route path="/createOrder" element={<CreateOrder />} />
      <Route path="/user-homepage" element={<UserListPage />} />
      <Route path="/my-cart" element={<ShoppingCartPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/saveproduct" element={<SaveProduct />} />
  
      <Route path="/sales-report" element={<SalesReportPage />} />

    </Route>    
  )
)


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;