import "@/shared/styles/globals.scss";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("@/features/header"));
const DynamicSidebar = dynamic(() => import("@/features/sidebar"));

export default function SubLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout style={{height: '100vh'}}>
      <DynamicHeader />
      <Layout>
        <DynamicSidebar />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              overflow: 'auto',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
