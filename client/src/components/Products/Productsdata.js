import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import AddProduct from "../admin/AddProduct";

const Productsdata = () => {
  const [term, setTerm] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("http://localhost:5000/api/products");

      // console.log(data)

      setTerm(
        data.map((product) => {
          return (
            <Link
              to={{ pathname: `products/${product._id}`, query: product }}
              className="product_card"
              key={product._id}>
              <img src={product.primarying} alt={product.title}></img>
              {product.title}
              <br />
            </Link>
          );
        })
      );
    };
    search();
  }, []);

  return (
    <div className="width100 ">
      {term}
    </div>
  );
};

export default Productsdata;
