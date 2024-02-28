import { useEffect } from "react";
import { useState } from "react";
import "./loadMore.css";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(1);
  const [disableButton, setDisableButton] = useState(false);

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
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    products?.length >= 100 ? setDisableButton(true) : setDisableButton(false);
  }, [products]);

  if (loading) {
    return <div>Loading data... Please wait.</div>;
  }

  return (
    <div className="load-more">
      <div className="product-container">
        {products?.length
          ? products.map((item) => (
              <div className="product" key={item.id.toString()}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button
          type="button"
          disabled={disableButton}
          onClick={() => setCount(count + 1)}
        >
          Load More Products
        </button>
        {disableButton ? <p>You have loaded all 100 products</p> : null}
      </div>
    </div>
  );
};

export default LoadMore;
