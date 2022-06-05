import React from "react";
import {
  FooterContainer,
  FooterFirst,
  FooterSecond,
  Contacts,
  ContactBlock,
  ContactContainer,
  ContactName,
  IconContainer,
  Icon,
  FooterThird,
  UpperLine,
  Prompt,
  LinksWrapper,
  IconLink,
  IconImg,
  BtnWrapper,
} from "./FooterElements";
import linkedin from "./linkedinlogo.png";
import { data, socials } from "./FooterData";
import Button from "@mui/material/Button";

const Footer = () => {
  return (
    <div className="contact">
      <FooterContainer>
        <FooterFirst>
          <ContactName>WITO</ContactName>
        </FooterFirst>
        <FooterSecond>
          <Contacts>
            {data.map((c) => {
              return (
                <ContactBlock>
                  <ContactContainer>
                    <ContactName>{c.name}</ContactName>
                  </ContactContainer>
                  <IconContainer href={c.linkedin} target="_blank">
                    <Icon src={linkedin} />
                  </IconContainer>
                </ContactBlock>
              );
            })}
          </Contacts>
        </FooterSecond>
        <FooterThird>
          <UpperLine/>
          <Prompt>Follow us on</Prompt>
          <LinksWrapper>
            {socials.map((social) => {
              return (
                <IconLink href={social.link} target="_blank">
                  <IconImg src={social.img}></IconImg>
                </IconLink>
              );
            })}
          </LinksWrapper>
          <BtnWrapper href="https://www.instagram.com/aryaxpandey/" target="_blank">
            <Button
              variant="contained"
              sx={{
                fontFamily: "'Montserrat', sans serif",
                fontWeight: "600",
                background: "white",
                color: "black",
                borderRadius: "10px",
                "&:hover": { background: "white" },
              }}
            >
             Follow WITO
            </Button>
          </BtnWrapper>
        </FooterThird>
      </FooterContainer>
    </div>
  );
};

export default Footer;
