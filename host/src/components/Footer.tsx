// components/Footer.tsx
"use client";

import Link from "next/link";
import { ShoppingCartOutlined } from "@ant-design/icons";

interface FooterColumn {
  title: string;
  links: {
    text: string;
    href: string;
  }[];
}

interface FooterProps {
  onNavigate?: (url: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const footerColumns: FooterColumn[] = [
    {
      title: "Shop",
      links: [
        { text: "Clothing", href: "/shop/clothing" },
        { text: "Shoes", href: "/shop/shoes" },
        { text: "Accessories", href: "/shop/accessories" },
        { text: "Brands", href: "/shop/brands" },
        { text: "Sale", href: "/shop/sale" },
        { text: "Gift Cards", href: "/shop/gift-cards" },
      ],
    },
    {
      title: "Gift Cards",
      links: [
        { text: "Buy Gift Cards", href: "/gift-cards/buy" },
        { text: "About Gift Cards", href: "/gift-cards/about" },
        { text: "Redeem a Gift Card", href: "/gift-cards/redeem" },
        { text: "Corporate Gift Cards", href: "/gift-cards/corporate" },
        { text: "Subscribe", href: "/gift-cards/subscribe" },
      ],
    },
    {
      title: "About Store",
      links: [
        { text: "About us", href: "/about-us" },
        { text: "Support", href: "/support" },
        { text: "Careers", href: "/careers" },
        { text: "Newsroom", href: "/newsroom" },
        { text: "Investors", href: "/investors" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Legal Notice", href: "/legal/notice" },
        { text: "Privacy Policy", href: "/legal/privacy" },
        { text: "Terms & Conditions", href: "/legal/terms" },
      ],
    },
  ];

  const handleClick = (href: string, e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <footer className="w-full bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          <div className="flex flex-col">
            <div className="mb-4">
              <ShoppingCartOutlined
                className="h-10 w-10 "
                style={{ color: "grey" }}
              />
            </div>
            <p className="text-gray-600 text-sm">
              Quality materials, good designs, professional craftsmanship and
              sustainability.
            </p>
          </div>

          {footerColumns.map((column, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="font-medium text-gray-800 mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleClick(link.href, e)}
                      className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
