import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Products from "../components/Products";

const Frontend = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    s: "",
    sort: "",
    page: 1,
  });

  const [lastPage, setLastPage] = useState(0);
  const perPage = 9;

  useEffect(() => {
    (async () => {
      const allData = await axios.get(
        "http://localhost:8000/api/products/frontend"
      );

      setAllProducts(allData.data);
      setFilteredProducts(allData.data.slice(0, filters.page * perPage));
      setLastPage(Math.ceil(allData.data.length / perPage));
    })();
  }, []);

  useEffect(() => {
    let products = allProducts.filter(
      (p) =>
        p.title.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0 ||
        p.description.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0
    );

    if (filters.sort === "asc" || filters.sort === "desc") {
      products.sort((a, b) => {
        // 0,-1,1
        const diff = a.price - b.price;

        if (diff === 0) return 0;

        const sign = Math.abs(diff) / diff;

        return filters.sort === "asc" ? sign : -sign;
      });
    }

    setLastPage(Math.ceil(products.length / perPage));
    setFilteredProducts(products.slice(0, filters.page * perPage));
  }, [filters]);

  return (
    <Layout>
      <Products
        products={filteredProducts}
        filters={filters}
        setFilters={setFilters}
        lastPage={lastPage}
      />
    </Layout>
  );
};

export default Frontend;
