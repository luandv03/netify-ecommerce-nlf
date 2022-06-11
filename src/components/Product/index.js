import classnames from "classnames/bind";
import styles from "./Product.module.scss";
import Button from "../Button";

const cx = classnames.bind(styles);

function Product({ item }) {
  const btnBuy = [
    {
      title: "Buy now",
      to: `/products/${item.id}`,
    },
  ];

  return (
    <div className={cx("wrapper", "col", "c-12", "m-4", "l-3")}>
      <img className={cx("item__img")} src={item.image} alt={item.title} />
      <div className={cx("detail")}>
        <h5 className={cx("title")}>{item.title}</h5>
        <p className={cx("price")}>${item.price}</p>
        <Button item={btnBuy[0]} outline btnBuy />
      </div>
    </div>
  );
}

export default Product;
