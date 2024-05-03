import { NavLink } from "react-router-dom"

export default function SideMenuLayout(props) {
  let header = props.header;
  let categories = props.data;

  return (
    <>
      <div className="sidemenu-div">
        <p className="sidemenu-header">{header}</p>
        { 
          categories.map((categoriesMap) => {
            return <NavLink to={categoriesMap.path} id="side-menu-option-link">
              <div className="option-div">
                <img className="option-icon" src={categoriesMap.imgUrl} alt="category icon"/>
                <p className="option">{categoriesMap.category}</p>
              </div>
            </NavLink>
          })
        }


      </div>
    </>
    
  )
}