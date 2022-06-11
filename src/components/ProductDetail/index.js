import classnames from "classnames/bind";
import styles from "./ProductDetail.module.scss";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classnames.bind(styles);

function ProductDetail() {
  const { id } = useParams();
  const [product, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const Loading = () => {
    return <>Loading.....</>;
  };

  const addCart = (product) => {
    dispatch(addProduct(product));
  };

  const ShowProduct = () => (
    <>
      <img src={product.image} alt={product.title} className={cx("image")} />
      <div className={cx("product__left", "col", "m-6", "c-6")}>
        <h4 className={cx("category")}>{product.category}</h4>
        <h1 className={cx("title")}>{product.title}</h1>
        <p className={cx("rating")}>
          Rating {product.rating && product.rating.rate}{" "}
          <FontAwesomeIcon icon={faStar} className={cx("icon")} />
        </p>
        <h3 className={cx("price")}>${product.price}</h3>
        <p className={cx("description")}>{product.description}</p>
        <div className={cx("actions")}>
          <button
            className={cx("btn__cart")}
            onClick={() => {
              addCart(product);
            }}
          >
            Add to Cart
          </button>
          <Link to="/cart" className={cx("btn__cart", "btn__cart-link")}>
            Go to Cart
          </Link>
        </div>
      </div>
    </>
  );
  return (
    <div className={cx("wrapper")}>
      <div className={cx("product")}>
        {loading ? <Loading /> : <ShowProduct />}
      </div>
    </div>
  );
}

export default ProductDetail;
