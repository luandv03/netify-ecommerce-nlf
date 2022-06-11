import classnames from "classnames/bind";
import styles from "./Cart.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProduct, removeProduct } from "../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";

const cx = classnames.bind(styles);
function Cart() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer);

  //Giảm số lượng sản phẩm
  const handleDecrease = (product) => {
    dispatch(deleteProduct(product));
  };

  //Tăng số lượng sản phẩm
  const handleIncrease = (product) => {
    dispatch(addProduct(product));
  };

  //Xóa sản phẩm ra khỏi giỏ hàng
  const handleRemove = (product) => {
    dispatch(removeProduct(product));
  };

  const renderCartList = () => {
    return (
      <>
        {state.map((product) => (
          <div key={product.id} className={cx("item")}>
            <div className={cx("item__img")}>
              <img src={product.image} alt={product.title} />
            </div>

            <div className={cx("infor")}>
              <h3 className={cx("title")}>{product.title}</h3>
              <p className={cx("price")}>${product.price}</p>
              <div className={cx("actions")}>
                <div className={cx("quantity__selector")}>
                  <button
                    className={cx("action")}
                    onClick={() => handleDecrease(product)}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span className={cx("quantity")}>{product.qty}</span>
                  <button
                    className={cx("action")}
                    onClick={() => {
                      handleIncrease(product);
                    }}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <div className={cx("total")}>
                  <h3>
                    <span>Total: </span>$
                    {product.qty * product.price.toFixed(2)}
                  </h3>
                </div>
                <button
                  className={cx("remove")}
                  onClick={() => handleRemove(product)}
                >
                  Remove
                </button>
              </div>
            </div>

            <div className={cx("actions")}>
              <div className={cx("quantity__selector")}>
                <button
                  className={cx("action")}
                  onClick={() => handleDecrease(product)}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className={cx("quantity")}>{product.qty}</span>
                <button
                  className={cx("action")}
                  onClick={() => {
                    handleIncrease(product);
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <button
                className={cx("remove")}
                onClick={() => handleRemove(product)}
              >
                Remove
              </button>
            </div>

            <div className={cx("total")}>
              <h3>${product.qty * product.price.toFixed(2)}</h3>
            </div>
          </div>
        ))}
        <div className={cx("proceed")}>
          <Button
            item={{ to: "/checkout", title: "Proceed to Checkout" }}
            outline
          />
        </div>
      </>
    );
  };

  const emptyCart = () => {
    return (
      <div>
        <h2 className={cx("empty")}>--Your cart is empty--</h2>
        <img
          src="https://i.pinimg.com/originals/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.png"
          className={cx("empty__image")}
        />
      </div>
    );
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        {state.length > 0 ? renderCartList() : emptyCart()}
      </div>
    </div>
  );
}

export default Cart;
