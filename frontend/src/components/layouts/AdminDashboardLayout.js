import { Outlet } from "react-router-dom";
import NavbarLayout from "./NavbarLayout"
import SideMenuLayout from "./SideMenuLayout"
import dashboard from "../img/icons/dashboard.png"
import user from "../img/icons/user.png";

import productListings from "../img/icons/product-listings.png"
import orderFulfillment from "../img/icons/order-fulfillment.png"
import salesReport from "../img/icons/sales-report.png"
import manageUsers from "../img/icons/manage-users.png"


// Data to be displayed on the navbar of this Admin Dashboard page
const navMenu = [
  { imgUrl: user, id: 1, idName: "user-button", path: "/profile" },
]

// side menu data for the shop page, this will be passed to the sidemenu creator component
const sideMenu = [
  { category: "Product Listings", imgUrl: productListings, path: "/admin-dashboard/product-listings", id: 1 },
  { category: "Order Fulfillment", imgUrl: orderFulfillment, path: "/admin-dashboard/order-fulfillment", id: 2 },
  { category: "Sales Report", imgUrl: salesReport, path: "/admin-dashboard/sales-report", id: 3 },
  { category: "Manage Users", imgUrl: manageUsers, path: "/admin-dashboard/manage-users", id: 4 },
  { category: "Add Product To Market", imgUrl: productListings, path: "/admin-dashboard/save-product", id: 5 },
]


export default function AdminDashboardLayout() {
  return (
    <>
      {/* Navbar */}
      <NavbarLayout navMenu={navMenu} pageName="Admin Dashboard" pageIcon={dashboard} homePath="/shop-admin"/>
      <div className="sidemenu-and-main-panel-div">
        <SideMenuLayout data={sideMenu} header="Menu"/>
        <Outlet />
      </div>
    </>
  )
}