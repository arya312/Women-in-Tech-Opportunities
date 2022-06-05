import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  SidebarContainer,
  Icon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  BtnWrapper
} from "./SidebarElement";
import Button from "@mui/material/Button";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon fontSize="large" />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="events" onClick={toggle}>Opportunities</SidebarLink>
            <SidebarLink to="timeline" onClick={toggle}>Dates</SidebarLink>
            <SidebarLink to="contact" onClick={toggle}>Contact Us</SidebarLink>
          </SidebarMenu>
          <BtnWrapper href="https://www.instagram.com/aryaxpandey/" target="_blank">
            <Button
              variant="contained"
              sx={{
                fontFamily: "'Montserrat', sans serif",
                fontWeight: "600",
                background: "white",
                color: "black",
                borderRadius: "10px",
                fontSize: "20px",
                padding: "10px",
                "&:hover": { background: "white" },
              }}
            >
              Join WITO
            </Button>
          </BtnWrapper>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
