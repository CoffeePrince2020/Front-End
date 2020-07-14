import React from "react";
import PropTypes from "prop-types";
import { List, Card, Avatar } from "antd";
import { RestOutlined } from "@ant-design/icons";

const FrequencyItem = ({ quantity }) => {
  return (
    <List.Item>
      <Card>
        <Card.Meta
          avatar={<Avatar icon={<RestOutlined />} size={60} />}
          title={quantity}
          description="흠..."
        />
      </Card>
    </List.Item>
  );
};

FrequencyItem.propTypes = {
  quantity: PropTypes.string.isRequired,
};

export default FrequencyItem;
