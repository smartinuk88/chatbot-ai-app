import {
  ApolloClient,
  InMemoryCache,
  DefaultOptions,
  createHttpLink,
} from "@apollo/client";

export const BASE_URL =
  process.env.NODE_ENV !== "development"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";

console.log("CLIENT DEBUG 1 >>> GraphQL URL is ", `${BASE_URL}/api/graphql`);

const httpLink = createHttpLink({
  uri: `${BASE_URL}/api/graphql`, // Point to the new API route
});

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

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});

export default client;
