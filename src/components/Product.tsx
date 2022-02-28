import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";

import anillo from "../../assets/images/anillo1.png";

type Props = {
  title: string;
  image: HTMLImageElement;
};

const Product = (props: Props) => {
  const { image, title } = props;
  return (
    <Box>
      <Image alt="Perda Maian" src={image} width={150} height={150} />
      <Typography variant="body2" sx={{ textAlign: "center" }}>
        {title}
      </Typography>
    </Box>
  );
};

export default Product;
