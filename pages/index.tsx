import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((res) => res.json())
      .then(({ data, length }) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <div>
        {products.map((product) => (
          <p key={product.id}>{product.name}</p>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
