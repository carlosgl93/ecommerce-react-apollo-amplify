import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

export default function MyApp(props) {
  const { Component } = props;

  const client = new ApolloClient({
    uri: "https://5nijwllo6ffn7jxcpxi6i4r4vy.appsync-api.sa-east-1.amazonaws.com/graphqlGraphQL",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <AppBar />
        <Box
          sx={{
            minHeight: "100vh",
            textAlign: "center",
          }}
        >
          <Component />
        </Box>
        <Footer />
      </ThemeProvider>
    </ApolloProvider>
  );
}
