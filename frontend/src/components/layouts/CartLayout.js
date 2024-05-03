import { Outlet } from "react-router-dom"
import NavbarLayout from "../layouts/NavbarLayout"

import cart from "../img/icons/cart.png"
import delivery from "../img/icons/delivery.png"
import user from "../img/icons/user.png"
// import deleteImg from "../img/icons/delete.png"
// import location from "../img/icons/location.png"

// Data to be displayed on the navbar of this cart page
const navMenu = [
  { imgUrl: delivery, id: 1, idName: "delivery-button", path: "/orders"},
  { imgUrl: user, id: 2, idName: "user-button", path: "/profile" },
]

export default function CartLayout() {
  return (
    <>
      {/* Navbar */}
      <NavbarLayout navMenu={navMenu} pageName="Cart" pageIcon={cart} homePath="/shop"/>
      <Outlet />
    </>
  )
}