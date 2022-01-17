import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import GlobalStyles from "./styles";
import Pages from "./pages";

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <React.StrictMode>
      <GlobalStyles />
      <Pages />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
