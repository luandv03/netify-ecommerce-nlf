import classnames from "classnames/bind";
import styles from "./Layout.module.scss";
import Products from "../Products";

const cx = classnames.bind(styles);

function Layout() {
  return (
    <div className={cx("wrapper")}>
      <img src="https://cdn.shopify.com/s/files/1/0632/7245/2350/files/UST_BANNER_1800x800_6cce28d2-6750-4984-b045-cfca0218f8a5_1600x.jpg?v=1649954960" />
      <Products />
    </div>
  );
}

export default Layout;
