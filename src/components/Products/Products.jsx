import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Button, Card } from "antd";
import "./Products.scss";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Products = () => {
  const { products, getProducts } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products-container">
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            title={product.product_name}
            bordered={false}
            style={{ width: 300 }}
          >
            <p>{product.description}</p>
            <p>{product.price}</p>
            <Button type="primary">
              Add to Cart
              <ShoppingCartOutlined />
            </Button>
          </Card>
        );
      })}
    </div>
  );
};

export default Products;
