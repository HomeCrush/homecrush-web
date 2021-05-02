/*import React, { useEffect, useState } from "react";
import { getProperties } from "../Services/PropertiesService";
import Products from "./Products";


const ProductHome = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getProperties().then((prods) => {
      setProperties(prods);
    });
  }, []);
  return (
    <div className="Home">
      <Products properties={properties} />
    </div>
  );
};

export default ProductHome;*/