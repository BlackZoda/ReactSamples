import { useEffect } from "react";
import { useState } from "react";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(1);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`,
      );
      const data = await response.json();

      if (data?.products?.length) {
        setProducts(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading data... Please wait.</div>;
  }

  return (
    <div className="load-more">
      <div>
        {products?.length
          ? products.map((item) => (
              <div key={item.id.toString()}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default LoadMore;
