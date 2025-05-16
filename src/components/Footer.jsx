import React from "react";
import { Divider, Input, Button } from "antd";
import {
  FacebookFilled,
  TwitterOutlined,
  InstagramFilled,
  YoutubeFilled,
  ShoppingOutlined,
  StarOutlined,
  GiftOutlined,
  FireOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  TruckOutlined,
  SyncOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Brand Column */}
          <div className="md:col-span-3">
            <div className="flex items-center mb-5">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                TechShop
              </h3>
            </div>
            <p className="text-gray-400 mb-6">
              Your premier destination for cutting-edge technology and
              innovative gadgets.
            </p>
            <div className="flex space-x-5">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-xl"
              >
                <FacebookFilled />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-xl"
              >
                <TwitterOutlined />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-500 transition-colors duration-300 text-xl"
              >
                <InstagramFilled />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-xl"
              >
                <YoutubeFilled />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-5 flex items-center">
              <ShoppingOutlined className="mr-2 text-blue-400" />
              Shop
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 flex items-center"
                >
                  <StarOutlined className="mr-2 text-sm" />
                  All Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 flex items-center"
                >
                  <FireOutlined className="mr-2 text-sm" />
                  Featured
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 flex items-center"
                >
                  <GiftOutlined className="mr-2 text-sm" />
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 flex items-center"
                >
                  <FireOutlined className="mr-2 text-sm" />
                  Sale Items
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-5 flex items-center">
              <PhoneOutlined className="mr-2 text-blue-400" />
              Support
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 flex items-center"
                >
                  <QuestionCircleOutlined className="mr-2 text-sm" />
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 flex items-center"
                >
                  <QuestionCircleOutlined className="mr-2 text-sm" />
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 flex items-center"
                >
                  <TruckOutlined className="mr-2 text-sm" />
                  Shipping
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 flex items-center"
                >
                  <SyncOutlined className="mr-2 text-sm" />
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-5">
            <h4 className="text-lg font-semibold mb-5 flex items-center">
              <MailOutlined className="mr-2 text-blue-400" />
              Newsletter
            </h4>
            <p className="text-gray-400 mb-4 max-w-lg">
              Subscribe to get exclusive updates on new product launches,
              special offers, and tech tips directly to your inbox.
            </p>
            <Input.Group compact className="flex w-full" style={{ maxWidth: '400px' }}>
              <Input 
                type="email" 
                placeholder="Your email" 
                className="h-10 focus:border-blue-500"
                style={{ width: '65%' }}
              />
              <Button 
                type="primary" 
                className="h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                style={{ width: '35%' }}
              > 
                Subscribe
              </Button>
            </Input.Group>
            <p className="text-gray-500 text-xs mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <Divider className="bg-gray-700 my-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} TechShop. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center space-x-4 md:space-x-6">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
