import classnames from "classnames/bind";
import styles from "./About.module.scss";

const cx = classnames.bind(styles);

function About() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <h1>About Us</h1>
        <span>
          Launched in Istanbul in 2020, influenced by the lifestyle of its
          creative director İlkyaz Özel, New Arrivals has become popular as a
          luxury label for its timeless evening looks with a sense of ease that
          aims to make women effortless, fun, and sexy at the same time. As an
          it-brand that is meant to inject luxury into the everyday lives of
          contemporary women with a hedonistic fashion vision, New Arrivals
          thinks being a woman should be celebrated wildly.
        </span>
      </div>
    </div>
  );
}

export default About;
