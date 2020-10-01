import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();

  const [product, setProduct] = useState<TProduct>();
  const url = `http://localhost:3000/api/avo/${id}`;

  useEffect(() => {
    window
      .fetch(url)
      .then((res) => res.json())
      .then(({ data }) => setProduct(data));
  }, []);

  return (
    <div>
      <p>id: {product?.id || "Sin id"}</p>
      <p>nombre: {product?.name || "Sin nombre"}</p>
    </div>
  );
};

export default ProductItem;
