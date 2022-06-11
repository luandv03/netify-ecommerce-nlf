import classnames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faUserPlus,
  faCartShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const cx = classnames.bind(styles);

const pages = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Product",
    to: "/products",
  },
  {
    title: "About",
    to: "/about",
  },
  {
    title: "Contact",
    to: "/contact",
  },
];

const pagesAction = [
  {
    title: "Login",
    icon: <FontAwesomeIcon icon={faRightToBracket} />,
    to: "/login",
  },
  {
    title: "Register",
    icon: <FontAwesomeIcon icon={faUserPlus} />,
    to: "/register",
  },
  {
    title: "Cart",
    icon: <FontAwesomeIcon icon={faCartShopping} />,
    to: "/cart",
  },
];

function Header() {
  const refName = useRef();

  //Lấy ra pathname URL hiện tại để highlight Title của Header hiện tại, VD:home,product,..
  const location = useLocation();

  //Trên Mobile-Tablet:Khi Click chuyển trang sẽ đóng thanh menu
  const handleHidden = () => {
    if (refName.current.checked) {
      refName.current.checked = false;
    }
  };

  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <div className={cx("home")}>
            <Link to="/" className={cx("home__link")}>
              <h2>LA COLLECTION</h2>
            </Link>
          </div>

          <div className={cx("pages")}>
            {pages.map((item, index) => (
              <Button
                key={index}
                item={item}
                pages
                highlight={location.pathname === item.to ? "highlight" : ""}
              />
            ))}
          </div>

          <div className={cx("actions")}>
            {pagesAction.map((item, index) => (
              <Button key={index} item={item} outline />
            ))}
          </div>

          {/* Mobile && Tablet */}
          <label htmlFor="nav-mobile-input" className={cx("menu")}>
            <FontAwesomeIcon icon={faBars} />
          </label>

          <input
            ref={refName}
            type="checkbox"
            id="nav-mobile-input"
            className={cx("nav__input")}
            hidden
          />

          <label
            htmlFor="nav-mobile-input"
            className={cx("overlayout")}
          ></label>

          <div className={cx("layout__mt")}>
            <label htmlFor="nav-mobile-input" className={cx("close")}>
              <FontAwesomeIcon icon={faXmark} />
            </label>
            <ul>
              <div className={cx("pages__mt")}>
                {pages.map((item, index) => (
                  <Button
                    key={index}
                    item={item}
                    pages
                    onClick={() => handleHidden()}
                  />
                ))}
              </div>

              <div className={cx("actions__mt")}>
                {pagesAction.map((item, index) => (
                  <Button
                    key={index}
                    item={item}
                    outline
                    onClick={() => handleHidden()}
                  />
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
