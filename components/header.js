import React, { Fragment } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon} from "mdbreact";
import "../static/css/dashboard.css";
import NavBar from './navBar';
class Header extends React.Component {
  constructor(props)
  {
    super(props);
  }
  logoutHandle = async () => {
    const url = new URL(`http://api.cz-tuts.com/logout`);
    const fetchCallOptions = {
    method: "post",
    credentials: 'include',
    headers: {
    'Content-Type': 'application/json'
    }
    };
      try {
          const resData = await fetch(url, fetchCallOptions);
          if (resData.status == 200) {
              const jsonData = await resData.json();
              if (jsonData.status == 0) {
                window.location = "/auth";
              }
          } 
          else {
            if (resData.status == 401 || resData.status == 403) {
            // window.location = "/auth";
            }
          }
      } 
      catch (error) {
        console.log(error);
      }
    }
  render(){
    const {isOpen, collapse, title} = this.props;

    const brand = <Fragment><img src="https://www.c-zentrix.com/images/landing-page/preloader.gif" width="30" height="30" alt="C-zentrix" />
    <span className="ml-2"> {title}</span></Fragment>

    const dropItem = [{icon:"user-circle",text:"My Profile",handle:null},{icon:"home",text:"Dashboard",handle:null},{icon:"home",text:"Change Password",handle:null},{icon:"power-off",text:"Logout",handle:this.logoutHandle}]
    
    return(
      <NavBar brand={brand} isOpen={isOpen} collapse={collapse} dropItem={dropItem} />
    );
  }
}

export default Header;