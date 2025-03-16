"use client";

import React, { useState } from "react";
import {
  Layout,
  Menu,
  Dropdown,
  Button,
  Input,
  Badge,
  Space,
  Divider,
} from "antd";
import {
  SearchOutlined,
  UserOutlined,
  ShoppingOutlined,
  FacebookFilled,
  InstagramFilled,
  TwitterSquareFilled,
  DownOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

const { Header: AntHeader } = Layout;
const { Search } = Input;

interface HeaderProps {
  onLanguageChange?: (language: string) => void;
  onCurrencyChange?: (currency: string) => void;
  cartItemCount?: number;
}

const Header: React.FC<HeaderProps> = ({
  onLanguageChange,
  onCurrencyChange,
  cartItemCount = 15,
}) => {
  const [currency, setCurrency] = useState<string>("USD");
  const [language, setLanguage] = useState<string>("English");

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
    if (onCurrencyChange) {
      onCurrencyChange(newCurrency);
    }
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    if (onLanguageChange) {
      onLanguageChange(newLanguage);
    }
  };

  const currencyMenuItems: MenuProps["items"] = [
    { key: "USD", label: "USD", onClick: () => handleCurrencyChange("USD") },
    { key: "EUR", label: "EUR", onClick: () => handleCurrencyChange("EUR") },
    { key: "GBP", label: "GBP", onClick: () => handleCurrencyChange("GBP") },
  ];

  const languageMenuItems: MenuProps["items"] = [
    {
      key: "English",
      label: "English",
      onClick: () => handleLanguageChange("English"),
    },
    {
      key: "Français",
      label: "Français",
      onClick: () => handleLanguageChange("Français"),
    },
    {
      key: "Español",
      label: "Español",
      onClick: () => handleLanguageChange("Español"),
    },
  ];

  const navMenuItems: MenuProps["items"] = [
    { key: "products", label: "Products" },
    { key: "collections", label: "Collections" },
    { key: "accessories", label: "Accessories" },
    { key: "gift-cards", label: "Gift Cards" },
  ];

  const topBarItems: MenuProps["items"] = [
    { key: "about", label: "About" },
    { key: "contact", label: "Contact" },
    { key: "faq", label: "FAQ" },
  ];

  return (
    <header className="w-full bg-gray-100">
      <div className="header-container ">
        <div className="top-bar-content flex flex-row justify-between items-center px-2">
          <Menu
            mode="horizontal"
            className="info-menu "
            selectedKeys={[]}
            items={topBarItems}
          />

          <div className="top-bar-right">
            <Space size={16}>
              <Space size={12} className="social-icons">
                <FacebookFilled style={{ color: "grey" }} />
                <InstagramFilled style={{ color: "grey" }} />
                <TwitterSquareFilled style={{ color: "grey" }} />
              </Space>

              <Divider type="vertical" />

              <Dropdown
                menu={{ items: currencyMenuItems }}
                placement="bottomRight"
              >
                <Button type="text" size="small">
                  {currency} <DownOutlined />
                </Button>
              </Dropdown>

              <Dropdown
                menu={{ items: languageMenuItems }}
                placement="bottomRight"
              >
                <Button type="text" size="small">
                  {language} <DownOutlined />
                </Button>
              </Dropdown>
            </Space>
          </div>
        </div>
        <Divider
          type="horizontal"
          style={{ paddingTop: 1, paddingBottom: 1, margin: 0 }}
        />
        <AntHeader className="main-header" style={{ padding: 0 }}>
          <div className="w-full px-2">
            <div className="main-nav-content grid grid-cols-3 gap-2">
              <div className="search-wrapper justify-center">
                <Button type="text" icon={<SearchOutlined />} />
                <Search style={{ display: "none" }} />
              </div>

              <div className="main-menu-wrapper  justify-center">
                <Menu
                  mode="horizontal"
                  items={navMenuItems}
                  className="main-menu"
                  selectedKeys={[]}
                />
              </div>

              <div className="user-actions flex justify-end items-center pr-2">
                <div className="justify-end">
                  <Button type="text" icon={<UserOutlined />} />
                  <Badge count={cartItemCount} size="small">
                    <Button type="text" icon={<ShoppingOutlined />} />
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </AntHeader>
      </div>
    </header>
  );
};

export default Header;
