"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  Row,
  Col,
  Typography,
  Tag,
  Alert,
  Image,
  Space,
  Button,
} from "antd";
import { ShoppingCartOutlined, DollarOutlined } from "@ant-design/icons";
const { Title, Paragraph } = Typography;

const Basket: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  const removeFromBasket = (productId: number) => {
    const updatedBasket = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
    window.dispatchEvent(new Event("basketUpdate"));
  };

  useEffect(() => {
    const loadBasket = () => {
      const basketItems = JSON.parse(localStorage.getItem("basket") || "[]");
      console.log("basket items loadBasket ", basketItems);
      setProducts(basketItems);
    };

    loadBasket();

    console.log("products basket ", products);
    window.addEventListener("basketUpdate", loadBasket);

    return () => {
      window.removeEventListener("basketUpdate", loadBasket);
    };
  }, []);

  return (
    <div className="products-container bg-white" style={{ padding: "24px" }}>
      <Title level={2}>Basket</Title>
      {products.length === 0 ? <p>Your card is empty</p> : null}

      <Row gutter={[24, 24]}>
        {products &&
          products.map((product: any) => (
            <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
              <Card
                hoverable
                cover={
                  <div
                    style={{
                      padding: "24px",
                      display: "flex",
                      justifyContent: "center",
                      height: "auto",
                      maxHeight: "300px",
                    }}
                  >
                    <Image
                      src={product.image || "https://placehold.co/200"}
                      alt={product.title}
                      style={{ maxHeight: "180px", objectFit: "contain" }}
                      fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7"
                    />
                  </div>
                }
              >
                <Card.Meta
                  title={product.title}
                  description={
                    <div>
                      {product.description && (
                        <Paragraph ellipsis={{ rows: 2 }}>
                          {product.description}
                        </Paragraph>
                      )}
                      {product.category && (
                        <Tag color="blue">{product.category}</Tag>
                      )}
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Basket;
