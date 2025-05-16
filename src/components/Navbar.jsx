import React, { useState } from 'react';
import { Input, Button, Badge, Dropdown, Menu, Avatar, message } from 'antd';
import { 
  ShoppingCartOutlined, 
  UserOutlined, 
  SearchOutlined, 
  BellOutlined,
  MailOutlined,
  LogoutOutlined,
  SettingOutlined,
  HeartOutlined
} from '@ant-design/icons';

const { Search } = Input;

const Navbar = () => {
  const [notificationCount, setNotificationCount] = useState(3);
  const [messageCount, setMessageCount] = useState(5);

  const handleNotificationClear = () => {
    setNotificationCount(0);
    message.success('Notifications cleared');
  };

  const handleMessageClear = () => {
    setMessageCount(0);
    message.success('Messages cleared');
  };

  const notificationMenu = (
    <Menu>
      <Menu.ItemGroup title="New Notifications">
        <Menu.Item key="1" icon={<BellOutlined />}>
          New order received
        </Menu.Item>
        <Menu.Item key="2" icon={<BellOutlined />}>
          Flash sale starting soon
        </Menu.Item>
        <Menu.Item key="3" icon={<BellOutlined />}>
          Your review was approved
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.Divider />
      <Menu.Item key="clear" onClick={handleNotificationClear}>
        Clear All Notifications
      </Menu.Item>
    </Menu>
  );

  const messageMenu = (
    <Menu>
      <Menu.ItemGroup title="New Messages">
        <Menu.Item key="1" icon={<MailOutlined />}>
          Order confirmation #12345
        </Menu.Item>
        <Menu.Item key="2" icon={<MailOutlined />}>
          Your return was processed
        </Menu.Item>
        <Menu.Item key="3" icon={<MailOutlined />}>
          Exclusive offer for you!
        </Menu.Item>
        <Menu.Item key="4" icon={<MailOutlined />}>
          Shipping update for your order
        </Menu.Item>
        <Menu.Item key="5" icon={<MailOutlined />}>
          Welcome to TechShop!
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.Divider />
      <Menu.Item key="clear" onClick={handleMessageClear}>
        Clear All Messages
      </Menu.Item>
    </Menu>
  );

  const userMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        My Profile
      </Menu.Item>
      <Menu.Item key="wishlist" icon={<HeartOutlined />}>
        Wishlist
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Company Name/Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mr-2">TechShop</h1>
            <span className="hidden md:block text-sm text-gray-500">| Premium Tech Store</span>
          </div>
          
          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:block flex-1 mx-8">
            <Search
              placeholder="Search for gadgets, accessories and more..."
              enterButton={<Button type="primary" icon={<SearchOutlined />}>Search</Button>}
              size="large"
              className="max-w-xl"
            />
          </div>
          
          {/* Right Side Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Notifications */}
            <Dropdown overlay={notificationMenu} trigger={['click']}>
              <Badge count={notificationCount} className="cursor-pointer">
                <Button 
                  type="text" 
                  icon={<BellOutlined className="text-xl" />} 
                  className="flex items-center"
                />
              </Badge>
            </Dropdown>
            
            {/* Messages/Inbox */}
            <Dropdown overlay={messageMenu} trigger={['click']}>
              <Badge count={messageCount} className="cursor-pointer">
                <Button 
                  type="text" 
                  icon={<MailOutlined className="text-xl" />} 
                  className="flex items-center"
                />
              </Badge>
            </Dropdown>
            
            {/* Cart */}
            <Badge className="cursor-pointer">
              <Button 
                type="text" 
                icon={<ShoppingCartOutlined className="text-xl" />} 
                className="flex items-center"
              />
            </Badge>
            
            {/* User Profile */}
            <Dropdown overlay={userMenu} trigger={['click']}>
              <div className="cursor-pointer flex items-center">
                <Avatar 
                  size="default" 
                  icon={<UserOutlined />} 
                  className="bg-blue-100 text-blue-600"
                />
                <span className="hidden md:inline ml-2 text-sm font-medium">Johnny Sins</span>
              </div>
            </Dropdown>
          </div>
        </div>
        
        {/* Mobile Search - Only visible on mobile */}
        <div className="mt-3 md:hidden">
          <Search
            placeholder="Search products..."
            enterButton={<SearchOutlined />}
            size="middle"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;