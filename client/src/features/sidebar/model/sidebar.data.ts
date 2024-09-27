import { routes } from "@/shared/config/routes";
import {
  UserOutlined,
  MessageOutlined,
  SettingOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import React from "react";

const sidebarIcons = [
  UserOutlined,
  MessageOutlined,
  ProfileOutlined,
  SettingOutlined,
];

export const sidebarItems: MenuProps["items"] = [
  routes.PROFILE,
  routes.MESSAGES,
  routes.PROFILE_SETTINGS,
  routes.SETTINGS,
].map((item, index) => ({
  key: item.label,
  label: item.label,
  href: item.url,
  icon: React.createElement(sidebarIcons[index]),
}));
