import { Menu, Dropdown, Button, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './Navbar.css'; // Figma styles

const menu = (
  <Menu>
    <Menu.Item key="1">Option 1</Menu.Item>
    <Menu.Item key="2">Option 2</Menu.Item>
    <Menu.Item key="3">Option 3</Menu.Item>
  </Menu>
);

const Navbar = () => {
  return (
    <div className="navbar-desktop">
      {/* Logo */}
      <div className="logo">
        <img src="/logo-icon.png" alt="Logo" className="logo-icon" />
        <span className="logo-text">Finder</span>
      </div>

      {/* Navigation Links */}
      <Space size={10} className="nav-links">
        <Button type="text" className="nav-link">
          Buy
        </Button>
        <Button type="text" className="nav-link">
          Sell
        </Button>
        <Button type="text" className="nav-link">
          Rent
        </Button>

        <Dropdown overlay={menu}>
          <Button className="nav-link">
            New buildings <DownOutlined />
          </Button>
        </Dropdown>

        <Button type="text" className="nav-link">
          Top agents
        </Button>
        <Button type="text" className="nav-link">
          Help center
        </Button>
      </Space>

      {/* Buttons group */}
      <Space size={12} className="button-group">
        <Button type="primary" className="add-property-btn">
          Add property
        </Button>
        <Button className="icon-btn">
          <img src="/sun-icon.png" alt="sun" />
        </Button>
      </Space>
    </div>
  );
};

export default Navbar;
