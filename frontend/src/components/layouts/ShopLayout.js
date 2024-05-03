import { Link, Outlet } from "react-router-dom";
import SideMenuLayout from './SideMenuLayout';

import logo from "../img/logo/farm-to-table.png";
import shoppingBag from "../img/icons/shopping-bag.png";
import cart from "../img/icons/cart.png";
import delivery from "../img/icons/delivery.png";
import user from "../img/icons/user.png";
import crop from "../img/icons/plant.png";
import poultry from "../img/icons/dairy-products.png";



// side menu data for the shop page, this will be passed to the sidemenu creator component
const sideMenu = [
  { category: "Crops", imgUrl: crop, path: "/shop/crops", id: 1 },
  { category: "Poultry Items", imgUrl: poultry, path: "/shop/poultry-items", id: 2 },
]

export default function ShopLayout() {
  return (
    <>
      <div className="navbar" id="shop-navbar">
        <div className="title-logo-page">
          <img className="logo" src={logo} alt="Logo"/>
          <p className="website-name">Farm-to-Table</p>
          <p className="page-name" id="page-name">Shop</p>
          <img className="page-icon" src={shoppingBag} alt="shopping bag icon"/>
        </div>

        <div className="nav-menu">
          <Link to="/cart"><img className="navbar-buttons" id="cart-button" src={cart} alt="cart"/></Link>
          <Link to="/orders"><img className="navbar-buttons" id="delivery-button" src={delivery} alt="delivery"/></Link>
          <Link to="/profile"><img className="navbar-buttons" id="user-button" src={user} alt="user"/></Link>
        </div>
      </div>

      <div className="sidemenu-and-main-panel-div">
        <SideMenuLayout data={sideMenu} header="Categories"/>
        <Outlet />
      </div>
    </>
  )
}