import classnames from "classnames/bind";
import styles from "./Products.module.scss";
import { useState, useEffect } from "react";
import Product from "../Product";
import Button from "../Button";
const cx = classnames.bind(styles);

const categoryItems = [
  {
    title: "All",
    // to: "/",
    category: "all",
  },
  {
    title: "Men's Clothing",
    // to: "/men",
    category: "men's clothing",
  },
  {
    title: "Women's Clothing",
    // to: "/women",
    category: "women's clothing",
  },
  {
    title: "Jewelery",
    // to: "/jewelery",
    category: "jewelery",
  },
  {
    title: "Electronic",
    // to: "/electronics",
    category: "electronics",
  },
];

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilter(data);
        setLoading(false);
      });
  }, []);

  const Loading = () => {
    return <>Loading....</>;
  };

  const updateFilter = (cat) => {
    const updatedList =
      cat !== "all" ? data.filter((item) => item.category === cat) : data;
    setFilter(updatedList);
  };

  const ShowProduct = () =>
    filter.map((item) => <Product key={item.id} item={item} />);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <h1>Latest Products</h1>
        <hr />

        {/* //Category */}
        <div className={cx("category")}>
          {categoryItems.map((item, index) => {
            return (
              <Button
                key={index}
                item={item}
                outline
                category
                onClick={() => updateFilter(item.category)}
              />
            );
          })}
        </div>

        <div className={cx("row")}>
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}

export default Products;
