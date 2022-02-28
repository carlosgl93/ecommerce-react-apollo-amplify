import { Typography, Container } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Carousel from "../components/Carousel";
import Product from "../components/Product";

import anillo1 from "../../assets/images/anillo1.png";
import anillo2 from "../../assets/images/anillo2.png";
import anillo3 from "../../assets/images/anillo3.png";
import anillo4 from "../../assets/images/anillo4.png";

export default function Home() {
  const rings = [
    { image: anillo1, title: "Ola" },
    { image: anillo2, title: "Luna y Estrella" },
    { image: anillo3, title: "Infinito y Estrella" },
    { image: anillo4, title: "Estrella" },
  ];

  return (
    <Container sx={{ display: "flex", flexDirection: "column" }}>
      <Carousel />
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h5">MÁS VENDIDOS</Typography>
      </Box>
      <Stack
        direction="row"
        spacing={3}
        sx={{ textAlign: "center", alignContent: "center" }}
      >
        {rings.map((ring, index) => {
          return <Product key={index} image={ring.image} title={ring.title} />;
        })}
      </Stack>
    </Container>
  );
}
