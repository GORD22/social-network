import { Menu, MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";

type Props = {};

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

export const CustomHeader = (props: Props) => {
  const {} = props;

  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ flex: 1, minWidth: 0 }}
        items={items1}
      />
    </Header>
  );
};
