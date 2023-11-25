import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const Products = () => {
  const { products, getProducts } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.product_name}</h2>
          </div>
        );
      })}
    </>
  );
};

export default Products;