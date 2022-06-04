import React from "react";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon
} from "./NavbarElement";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer >
          <MobileIcon onClick={toggle}>
            <MenuIcon fontSize="large"/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="events"><h3>Opportunities</h3></NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="timeline"><h3>Dates</h3></NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact"><h3>Contact Us</h3></NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
