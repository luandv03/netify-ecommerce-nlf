import classnames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const cx = classnames.bind(styles);

function Button({
  to,
  item,
  outline = false,
  btnBuy = false,
  category = false,
  pages = false,
  onClick,
  highlight,
}) {
  const state = useSelector((state) => state.reducer);
  return (
    <Link
      to={item.to || ""}
      className={cx("wrapper", { outline, pages, btnBuy, category }, highlight)}
      onClick={onClick}
    >
      {item.icon}
      <h4 className={cx("title")}>{item.title}</h4>
      {item.title === "Cart" && <>({state.length})</>}
    </Link>
  );
}

export default Button;
