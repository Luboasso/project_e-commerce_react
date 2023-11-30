import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Card } from "antd";
import "./Products.scss";

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
          </Card>
        );
      })}
    </div>
  );
};

export default Products;
