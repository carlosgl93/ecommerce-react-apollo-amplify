import React from "react";
import { Box, Grid, Typography, AppBar, Stack } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../../assets/images/perda-logo.png";
import Image from "next/image";

type Props = {};

const links = [
  "Acerca de Perdamaian",
  "Cambios y Devoluciones",
  "Puntos de venta",
  "Cuidados de las Joyas",
  "Preguntas Frecuentes",
  "Envíos",
  "Contacto",
];

const Footer = (props: Props) => {
  return (
    <AppBar
      position="static"
      sx={{ top: "auto", bottom: "0", marginTop: "50vh" }}
    >
      <Grid
        container
        spacing={2}
        sx={{ textAlign: "center", alignItems: "center", padding: "5vh" }}
      >
        <Grid item xs={12} md={12} lg={4} sx={{}}>
          <Box sx={{ justifyContent: "center", textAlign: "center" }}>
            {links.map((link) => {
              return <Typography variant="body1">{link}</Typography>;
            })}
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={4} xl={4}>
          <InstagramIcon sx={{ color: "#fadbdb" }} />
          <FacebookOutlinedIcon sx={{ color: "#fadbdb" }} />
          <WhatsappOutlinedIcon sx={{ color: "#fadbdb" }} />
        </Grid>
        <Grid item xs={12} md={12} lg={4} xl={4}>
          <Image alt="Perda Maian" src={logo} width={100} height={100} />
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Footer;
