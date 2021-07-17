// React
import React, { Component } from 'react'

// Apollo
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";

// Auth
import { login } from './githubLogin'
import { username, password } from './config'
import { getLoginUrl, loadToken, deparam, param } from './oAuth';
// App.Components
import Repository from './repository'

// Global.Auth
let TOKEN = null

// Global.Apollo
// const networkInterface = createNetworkInterface('https://api.github.com/graphql')
const httpLink = createHttpLink({ uri: "https://api.github.com/graphql" });
const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: `Bearer ${TOKEN}`
    }
  });
  return forward(operation);
});
const link = middlewareLink.concat(httpLink);
const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});


// networkInterface.use([
//   {
//     applyMiddleware (req, next) {
//       if (!req.options.headers) {
//         req.options.headers = {} // Create the header object if needed.
//       }

//       // Send the login token in the Authorization header
//       req.options.headers.authorization = `Bearer ${TOKEN}`
//       next()
//     }
//   }
// ])

// const client = new ApolloClient({
//   networkInterface
// })


// App
export default class App extends Component {
  constructor() {
    super()
    this.state = { login: false }
  }

  componentDidMount() {
    if (username === 'xxx') {
      throw new Error('Please create a config.js your username and password.')
    }

    const params = deparam(window.location.search.substr(1));
    const session = localStorage.getItem('utterances-session') || params.utterances || '';
    if (!session) {
      localStorage.setItem('utterances-session', session);
      delete params.utterances;
      let search = param(params);
      if (search.length) {
        search = '?' + search;
      }
      window.history.replaceState(undefined, document.title, window.location.pathname + search + window.location.hash);
    } else {
      loadToken(session).then((data) => {
        if (!data) {
          window.location.href = getLoginUrl();
        } else {
          TOKEN = data;
          this.setState({ login: true })
        }
      });
    }
  }

  routeForRepository(login, name) {
    return {
      title: `${login}/${name}`,
      component: Repository,
      login,
      name
    }
  }

  render() {
    // Log in state
    if (!this.state.login) {
      return <p>Logging</p>
    }

    // Logged in, fetch from Github
    return this.state.login
      ? <ApolloProvider client={client}>
        <Repository {...this.routeForRepository('wangyuanzcm', 'hiker-coding')} />
      </ApolloProvider>
      : <p>Logging in...
      </p>
  }
}
