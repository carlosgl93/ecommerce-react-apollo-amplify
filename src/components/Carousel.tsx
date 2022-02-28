import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

import car1 from "../../assets/images/car1.png";
import car2 from "../../assets/images/car2.png";

type Props = {};

const Carousel = (props: Props) => {
  const images = [car1, car2];

  const [displayedImage, setDisplayedImage] = useState(0);

  const updateImage = () => {
    if (displayedImage < images.length - 1) {
      setDisplayedImage(displayedImage + 1);
    } else {
      setDisplayedImage(0);
    }
  };

  const updateLeft = () => {
    if (displayedImage > 0) {
      setDisplayedImage(displayedImage - 1);
    } else {
      setDisplayedImage(images.length - 1);
      return;
    }
  };

  return (
    <Box>
      <Image src={images[displayedImage]} layout="responsive" />
      <Box>
        <Button sx={{ position: "relative", bottom: "7vh" }}>
          <ArrowCircleLeftRoundedIcon
            fontSize="large"
            sx={{ color: "#fadbdb" }}
            onClick={updateLeft}
          />
        </Button>
        <Button sx={{ position: "relative", bottom: "7vh" }}>
          <ArrowCircleRightRoundedIcon
            fontSize="large"
            sx={{ color: "#fadbdb" }}
            onClick={updateImage}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default Carousel;
