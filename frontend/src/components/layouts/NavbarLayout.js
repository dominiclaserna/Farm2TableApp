import { Link } from "react-router-dom"
import home from "../img/icons/home.png"

export default function NavbarLayout(props) {
  let navMenu = props.navMenu
  let pageName = props.pageName
  let pageIcon = props.pageIcon
  let homePath = props.homePath

  return (
    <>
      <div className="navbar" id="submenu-navbar">
        <div id="home-page-icon-div">
          <Link to={homePath}><img id="home" src={home} alt="home button"/></Link>
          <p id="page-name">{pageName}</p>
          <img className="page-icon" src={pageIcon} alt="page icon"/>
        </div>

        <div id="nav-menu">
          {
            navMenu.map((navMenuMap) => {
              return <Link to={navMenuMap.path}><img className="navbar-buttons" id={navMenuMap.idName} src={navMenuMap.imgUrl} alt="navmenu button"/></Link>
            })
          }
        </div>
      </div>
    </>
  )
}