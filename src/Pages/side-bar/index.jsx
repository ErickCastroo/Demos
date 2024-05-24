import { useState } from "react";
import { Logo } from "./components/Logo.jsx";
import { MenuList } from "./components/MenuLisit.jsx";
import { BotonTema } from "./components/BotonTema.jsx";
// import { Masonrys } from "../Masonry/index.jsx";
import { Layout, Button, theme } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header, Sider } = Layout;

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const toggleTheme = () => setDarkTheme(!darkTheme);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        collapsed={collapsed}
        collapsible
        trigger={null}
        theme={darkTheme ? "dark" : "light"}
        className="text-white"
      >
        <Logo />
        <MenuList darkTheme={darkTheme} />
        <BotonTema darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            className="toggle"
            onClick={toggleCollapsed}
          />
        </Header>
        {/* <Masonrys /> */}
      </Layout>
    </Layout>
  );
};

export { App };
