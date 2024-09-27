import { Avatar, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Posts } from "@/features/posts";

export default function Page() {

  return (
    <>
      <div>
        <Avatar size={64} icon={<UserOutlined />} />
        <Typography>User Userovich</Typography>
      </div>
      <Posts />
    </>
  );
}
