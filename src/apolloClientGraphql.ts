import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.skedulo.com/graphql/graphql",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_SKEDULO_TOKEN || ''}`,
  },
  cache: new InMemoryCache(),
});

export default client;