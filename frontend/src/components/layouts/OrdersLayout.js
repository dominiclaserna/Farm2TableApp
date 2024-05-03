import { Outlet } from "react-router-dom";

import NavbarLayout from "./NavbarLayout"
import SideMenuLayout from "./SideMenuLayout"
import delivery from "../img/icons/delivery.png"
import cart from "../img/icons/cart.png"
import user from "../img/icons/user.png"
import toReceive from "../img/icons/to-receive.png"
import completed from "../img/icons/completed.png"

// Data to be displayed on the navbar of this Orders page
const navMenu = [
  { imgUrl: cart, id: 1, idName: "cart-button", path: "/cart" },
  { imgUrl: user, id: 2, idName: "user-button", path: "/profile" },
]

// side menu data for the shop page, this will be passed to the sidemenu creator component
const sideMenu = [
  { category: "To Receive", imgUrl: toReceive, path: "/orders/to-receive", id: 1 },
  { category: "Completed", imgUrl: completed, path: "/orders/completed", id: 2 },
]

export default function OrdersLayout() {
  return (
    <>
      {/* Navbar */}
      <NavbarLayout navMenu={navMenu} pageName="Orders" pageIcon={delivery} homePath="/shop"/>
      <div className="sidemenu-and-main-panel-div">
        <SideMenuLayout data={sideMenu} header="My Purchases"/>
        <Outlet />
      </div>
    </>
  )
}