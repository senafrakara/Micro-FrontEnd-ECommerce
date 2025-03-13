"use client";

import React from "react";
import { useGetProductsQuery } from "@/redux/api";
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
  notification,
  message,
} from "antd";
import { ShoppingCartOutlined, DollarOutlined } from "@ant-design/icons";
const { Title, Paragraph } = Typography;
import { useRouter } from "next/navigation";

export default function Products() {
  const { data: products, error } = useGetProductsQuery();
  const router = useRouter();

  const handleAddToBasket = (product: any) => {
    const addToBasket = (product: any) => {
      const basketItems = JSON.parse(localStorage.getItem("basket") || "[]");
      basketItems.push(product);
      localStorage.setItem("basket", JSON.stringify(basketItems));

      window.dispatchEvent(new Event("basketUpdate"));
    };
    addToBasket(product);

    message.success({
      content: `${product.name} added to basket! 
       ${(
         <Card
           hoverable
           style={{ width: 250 }}
           cover={
             <div
               style={{
                 display: "flex",
                 justifyContent: "center",
                 padding: "10px",
               }}
             >
               <Image
                 src={product.image}
                 alt={product.title}
                 width={80}
                 height={80}
               />
             </div>
           }
         >
           <Card.Meta
             title={product.title}
             description={"Price: ${product.price} $"}
           />
           <Button
             type="primary"
             style={{ marginTop: 10, width: "100%" }}
             onClick={() => router.push("/basket")}
           >
             Go to Basket
           </Button>
         </Card>
       )}`,
      duration: 5,
      style: { position: "fixed", top: "10px", right: "10px" },
    });

    /* notification.success({
      message: "Product added to basket!",
      description: (
        <Card
          hoverable
          style={{ width: 250 }}
          cover={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "10px",
              }}
            >
              <Image
                src={product.image}
                alt={product.title}
                width={80}
                height={80}
              />
            </div>
          }
        >
          <Card.Meta
            title={product.title}
            description={`Fiyat: ${product.price} $`}
          />
          <Button
            type="primary"
            style={{ marginTop: 10, width: "100%" }}
            onClick={() => router.push("/basket")}
          >
            Go to Basket
          </Button>
        </Card>
      ),
      duration: 5,
    }); */
  };

  if (error) {
    return (
      <Alert
        message="Error"
        description="Something went wrong while loading products."
        type="error"
        showIcon
      />
    );
  }

  return (
    <div className="products-container bg-white" style={{ padding: "24px" }}>
      <Title level={2}>Our Products</Title>
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
                actions={[
                  <Space key="price">
                    <DollarOutlined />
                    {product.price}
                  </Space>,
                  <ShoppingCartOutlined
                    key="add"
                    onClick={() => handleAddToBasket(product)}
                  />,
                ]}
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
}
