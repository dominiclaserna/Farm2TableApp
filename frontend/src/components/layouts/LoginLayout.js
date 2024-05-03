import { Outlet, Link} from "react-router-dom";
import logo from "../img/logo/farm-to-table.png";
import back from "../img/icons/back.png"

export default function LoginLayout(props) {
  let pageName = props.pageName
  return (
    <>
      <div className="navbar" id="login-navbar">
      <Link to="/"><img className="back-button" id="back-button"  src={back} alt="back button"/></Link>
        <img className="logo" id="logo" src={logo} alt="Logo"/>
        <p className="website-name" id="website-name" >Farm-to-Table</p>
        <p className="page-name" id="page-name">{pageName}</p>
      </div>
      <Outlet />
    </>
  )
}