import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sidebarItems } from "../model/sidebar.data";

export const CustomSidebar = () => {

  return (
    <Sider width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={sidebarItems}
      />
    </Sider>
  );
};
