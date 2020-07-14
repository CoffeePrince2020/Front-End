import React, { useState, useCallback } from "react";
import { Button, Divider, Typography, Drawer } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = useCallback(() => {
    setVisible(true);
  }, []);
  const closeDrawer = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <>
      <Typography.Text mark>Coffee Prince</Typography.Text>
      <Button icon={<SearchOutlined />} shape="round" onClick={showDrawer}>
        스타벅스
        <Divider type="vertical" />
        최소 1 개
        <Divider type="vertical" />
        최대 1 개
      </Button>
      <Drawer placement="top" visible={visible} onClose={closeDrawer}>
        테스트~
      </Drawer>
    </>
  );
};

export default Header;
