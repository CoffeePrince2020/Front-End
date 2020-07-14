import React from "react";
import AppLayout from "../components/layout/AppLayout";

import wrapper from "../store/configureStore";

const Home = () => {
  return (
    <AppLayout>
      <div>Hello Coffee Prince</div>
    </AppLayout>
  );
};

export default wrapper.withRedux(Home);
