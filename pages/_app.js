import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import "antd/dist/antd.css";

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Coffee Prince</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
