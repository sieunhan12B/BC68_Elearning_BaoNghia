import React from "react";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";

import { Layout, Menu, theme, Avatar, Dropdown, Button, Image } from "antd";
import { path } from "../../common/path";
import { useSelector } from "react-redux";
import UserIcon from "../../components/Icon/UserIcon";
import LogoutIcon from "../../components/Icon/LogoutIcon";

import InfoUser from "../../components/InfoUser/InfoUser";

const { Content, Footer, Sider } = Layout;
const items = [
  {
    label: (
      <Link className="flex space-x-2 items-center">
        <UserIcon />
        <span>Thông tin cá nhân</span>
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link className="flex space-x-2 items-center">
        <LogoutIcon />
        <span>Đăng xuất</span>
      </Link>
    ),
    key: "1",
  },
];

const itemss = [
  {
    icon: UserOutlined,
    label: <Link to={path.inFoUser}> Thông tin tài khoản</Link>,
  },
  {
    icon: VideoCameraOutlined,
    label: <Link to={path.myLesson}> Bài học của tôi</Link>,
  },
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon.icon),
  label: icon.label,
}));
const StudentTemplate = () => {
  const { infoUser } = useSelector((state) => state.authSlice);

  const checkUserLogin = () => {
    return infoUser ? (
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <Avatar className="cursor-pointer hover:bg-orange-500 duration-300">
          {infoUser.taiKhoan.slice(0, 1)}
        </Avatar>
      </Dropdown>
    ) : (
      <>
        <Link
          to={path.signIn}
          className="py-2 px-4 rounded-md hover:bg-gray-200 duration-300"
        >
          sign in
        </Link>
        <Link
          to={path.signUp}
          className="py-2 px-4 text-green-500 border border-green-500 rounded-md hover:bg-green-500 duration-300 hover:text-white "
        >
          Join
        </Link>
      </>
    );
  };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={itemss}
        />
      </Sider>
      <Layout>
        <header className="p-5">
          <div className="container">
            <div className="header_content flex items-center justify-between">
              <div className="header_logo flex items-center space-x-5">
                <Link
                  className="text-2xl font-semibold opacity-50"
                  to={path.homePage}
                >
                  Trang chủ
                </Link>
              </div>
              <nav className="header_navigate space-x-5">
                {checkUserLogin()}
              </nav>
            </div>
          </div>
        </header>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        {/* <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};
export default StudentTemplate;
