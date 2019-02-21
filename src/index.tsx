import * as React from "react";
import * as ReactDOM from "react-dom";
import { ApolloProvider } from 'react-apollo';
import client from './apolloSetup';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css'

const ROOT = document.getElementById("root");

const Wrapper = () => (
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
);

ReactDOM.render(<Wrapper/>, ROOT);