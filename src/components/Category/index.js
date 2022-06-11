import classnames from "classnames/bind";
import styles from "./Category.module.scss";
import Button from "../Button";

const cx = classnames.bind(styles);

const categoryItems = [
  {
    title: "All",
    to: "/",
    category: "all",
  },
  {
    title: "Men's Clothing",
    to: "/men",
    category: "men's clothing",
  },
  {
    title: "Women's Clothing",
    to: "/women",
    category: "women's clothing",
  },
  {
    title: "Jewelery",
    to: "/jewelery",
    category: "jewelery",
  },
  {
    title: "Electronic",
    to: "/electronic",
    category: "electronic",
  },
];

function Category({ onClick }) {
  return (
    <div className={cx("wrapper")}>
      {categoryItems.map((item, index) => (
        <Button
          key={index}
          item={item}
          outline
          category
          onClick={onClick(item.category)}
        />
      ))}
    </div>
  );
}

export default Category;
