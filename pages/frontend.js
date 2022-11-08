import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Products from "../components/Products";

const Frontend = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products/frontend").then((res) => {
      console.log(res);

      setProducts(res.data);
    });
  }, []);

  return (
    <Layout>
      <Products products={products} />
    </Layout>
  );
};

export default Frontend;
