import React from "react";
import { List } from "antd";

import FrequencyItem from "./FrequencyItem";

const data = [
  {
    quantity: "1 개",
  },
  {
    quantity: "2 개",
  },
  {
    quantity: "3 개",
  },
  {
    quantity: "4 개",
  },
  {
    quantity: "5 개",
  },
  {
    quantity: "6 개",
  },
];

const FrequencyList = () => {
  return (
    <>
      <List
        grid={{
          gutter: 20,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => <FrequencyItem quantity={item.quantity} />}
      />
    </>
  );
};

export default FrequencyList;
