import {  Outlet } from "react-router-dom";
import NavbarLayout from "./NavbarLayout";
import SideMenuLayout from './SideMenuLayout';


import delivery from "../img/icons/delivery.png";
import user from "../img/icons/user.png";

import accountSecurity from "../img/icons/account-security.png"

// Data to be displayed on the navbar of this cart page
const navMenu = [
  { imgUrl: delivery, id: 1, idName: "delivery-button", path: "/orders"},
  { imgUrl: user, id: 3, idName: "profile-button", path: "/profile" },
]

// side menu data for the shop page, this will be passed to the sidemenu creator component
const sideMenu = [
 
  { category: "Account Security", imgUrl: accountSecurity, path: "/profile/account-security", id: 2 },
]

export default function UserProfileLayout() {
  return (
    <>
      {/* Navbar */}
      <NavbarLayout navMenu={navMenu} pageName="Profile" pageIcon={user} homePath="/shop"/>
      <div className="sidemenu-and-main-panel-div">
        <SideMenuLayout data={sideMenu} header="Menu"/>
        <Outlet />
      </div>
    </>
  )
}