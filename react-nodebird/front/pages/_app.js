import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";

import Layout from "../components/Layout";
import reducer from "../reducers";

const NodeBird = ({ Component, store }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.js" />
      </Head>
      <Layout>
        <Component />
      </Layout>
    </Provider>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object
};

export default withRedux((initialState, options) => {
  // TODO: store customizing, devtool 사용 - middleware
  const middlewares = [];
  const enhancer = compose(
    applyMiddleware(...middlewares),
    !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  );
  const store = createStore(reducer, initialState, enhancer);
  return store;
})(NodeBird);
