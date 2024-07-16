import {
  ApolloClient,
  InMemoryCache,
  DefaultOptions,
  HttpLink,
} from "@apollo/client";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
  mutate: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

export const serverClient = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: "https://flatval.eu-central-a.ibm.stepzen.net/api/mortal-puffin/__graphql",
    headers: {
      Authorization: `Apikey ${process.env.GRAPHQL_TOKEN}`,
    },
    fetch,
  }),
  cache: new InMemoryCache(),
  defaultOptions,
});
