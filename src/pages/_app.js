import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function MyApp(props) {
  const { Component } = props;

  const client = new ApolloClient({
    uri: "To be added soon after setting up aws amplify",
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
        <Component />
      </ThemeProvider>
    </ApolloProvider>
  );
}
