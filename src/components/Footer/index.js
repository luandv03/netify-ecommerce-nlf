import classnames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classnames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default Footer;
