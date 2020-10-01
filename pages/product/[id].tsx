import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();

  const [product, setProduct] = useState<TProduct>();
  const url = `http://localhost:3000/api/avo/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => console.log(res.json()))
      // .then((data) => console.log(data));
  }, []);

  return <div>Esta es la pagina del producto: {id}</div>;
};

export default ProductItem;
