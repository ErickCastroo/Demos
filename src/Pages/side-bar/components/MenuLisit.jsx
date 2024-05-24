import { Menu } from "antd";
import { items } from "../Data.jsx";

function MenuList({ darkTheme }) {
  return (
    <Menu
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme={darkTheme ? "dark" : "light"}
      items={items}
      className="menu-list"
    />
  );
}

export { MenuList };
