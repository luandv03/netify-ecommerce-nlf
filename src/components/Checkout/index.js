import classnames from "classnames/bind";
import styles from "./Checkout.module.scss";
import { useSelector } from "react-redux";
import { useState } from "react";

const cx = classnames.bind(styles);

function Checkout() {
  const [fullname, setFullname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  let sumCost = 0;

  const products = useSelector((state) => state.reducer);

  const renderCart = () => {
    return (
      <>
        {products.map((product, index) => (
          <div key={index} className={cx("product")}>
            <h3>{product.title}</h3>
            <p className={cx("qty")}>&times;{product.qty}</p>
            <p className={cx("price")}>${product.price}</p>
          </div>
        ))}
      </>
    );
  };

  const costHandle = () => {
    products.map((product) => (sumCost += product.qty * product.price));
    return sumCost.toFixed(2);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <form className={cx("row")}>
          <div className={cx("information", "col", "m-12", "c-12", "l-6")}>
            <h2>Your Information</h2>
            <div className={cx("form__item")}>
              <input
                className={cx("input")}
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              <label className={cx("label")}>Full Name</label>
            </div>
            <div className={cx("form__item")}>
              <input
                className={cx("input")}
                type="text"
                name="phonenumber"
                placeholder="Phone Number"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
              />
              <label className={cx("label")}>Phone Number</label>
            </div>
            <div className={cx("form__item")}>
              <input
                className={cx("input")}
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className={cx("label")}>Email</label>
            </div>
            <div className={cx("form__item")}>
              <input
                className={cx("input")}
                type="text"
                name="address"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label className={cx("label")}>Address</label>
            </div>
          </div>

          <div className={cx("payment", "col", "m-12", "c-12", "l-6")}>
            <h2 className={cx("title")}>Your cart ({products.length})</h2>
            <hr />
            <div className={cx("cart")}>{renderCart()}</div>
            <hr />
            <div className={cx("service")}>
              <div className={cx("cost")}>
                <h3>Thanh toán</h3>
                <p>${costHandle()}</p>
              </div>
              <div className={cx("sale")}>
                <h3>Sale</h3>
                <p>- 0</p>
              </div>
              <div className={cx("ship")}>
                <h3>Phí vận chuyển</h3>
                <p>0</p>
              </div>
            </div>

            <hr />

            <div className={cx("cost__final")}>
              <h3>Tổng cộng</h3>
              <p>${costHandle()}</p>
            </div>

            <hr />

            <div className={cx("paycost")}>
              <button>Hoàn Tất Đặt Hàng</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
