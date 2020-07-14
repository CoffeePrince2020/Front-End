import React from "react";
import { Layout } from "antd";
import PropTypes from "prop-types";

import Header from "./Header";

const AppLayout = ({ children }) => {
  return (
    <Layout style={{ textAlign: "center" }}>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content style={{ padding: "50px" }}>{children}</Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
