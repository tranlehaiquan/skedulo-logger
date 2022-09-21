import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";

import App from "./App";
import "./index.css";
import apolloClientGraphql from "./apolloClientGraphql";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClientGraphql}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
