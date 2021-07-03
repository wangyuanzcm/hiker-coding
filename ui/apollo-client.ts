import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { split } from "apollo-link";

declare var PRODUCTION: boolean;

let WS_URL = "ws://localhost:4000";
let HTTP_URL = "http://localhost:4000";
if (PRODUCTION) {
  const WS_PROTOCOL = window.location.protocol === "https:" ? "wss:" : "ws:";
  WS_URL = `${WS_PROTOCOL}//${window.location.host}`;
  HTTP_URL = `${window.location.protocol}//${window.location.host}`;
}

export function getAPIUrl() {
  return HTTP_URL;
}

const wsLink = new WebSocketLink({
  uri: WS_URL,
  options: {
    reconnect: true
  }
});

const httpLink = new HttpLink({ uri: HTTP_URL });

const link = split(
  ({ query }: any) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

// import ApolloClient from 'apollo-client'
// import { ApolloLink } from "apollo-link";
// import { createHttpLink } from 'apollo-link-http';
// import { InMemoryCache } from "apollo-cache-inmemory";
// let TOKEN = null
// const httpLink = createHttpLink({ uri: "https://api.github.com/graphql" });
// const middlewareLink = new ApolloLink((operation, forward) => {
//   operation.setContext({
//     headers: {
//       authorization: `Bearer ${TOKEN}`
//     }
//   });
//   return forward(operation);
// });
 
// // use with apollo-client
// const link = middlewareLink.concat(httpLink);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()

})

export default client;
