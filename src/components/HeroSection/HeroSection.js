import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  HeroButton,
  BtnPath1,
  BtnPath2,
  BtnPath3,
} from "./HeroElements";
import video from "./finalVideo.mp4";
import { BtnWrapper } from "../Footer/FooterElements";
import { Button } from "@mui/material";

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroP>Welcome to</HeroP>
          <HeroH1>WITO</HeroH1>
          <BtnWrapper>
            {/* <Button
              variant="contained"
              sx={{
                fontFamily: "'Montserrat', sans serif",
                fontWeight: "600",
                background: "#FF8C8C",
                color: "#020910",
                borderRadius: "10px",
                fontSize: "15px",
                marginTop: "30px",
                padding: "5px",
                "&:hover": { background: "white" },
              }}
            >
              Scroll Down
            </Button> */}
          </BtnWrapper>
        </HeroContent>
        <HeroBtnWrapper to="events">
          <HeroButton>
            <BtnPath1 d="M0 0 L30 32 L60 0" />
            <BtnPath2 d="M0 20 L30 52 L60 20" />
            <BtnPath3 d="M0 40 L30 72 L60 40" />
          </HeroButton>
        </HeroBtnWrapper>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
