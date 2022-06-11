import classnames from "classnames/bind";
import styles from "./Login.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const cx = classnames.bind(styles);

function Login() {
  const [typePass, setTypePass] = useState("password");
  const [typeIcon, setTypeIcon] = useState(faEyeSlash);

  const handleFilter = () => {
    if (typePass === "password") {
      setTypePass("text");
      setTypeIcon(faEye);
    } else {
      setTypePass("password");
      setTypeIcon(faEyeSlash);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "This field must be email"
        ),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Minimum eight characters, at least one letter, one number and one special character"
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <form
          method="POST"
          className={cx("form")}
          onSubmit={formik.handleSubmit}
        >
          <div className={cx("header")}>
            <h2 className={cx("title")}>Login</h2>
            <p className={cx("text")}>Please enter your e-mail and password:</p>
          </div>

          <div className={cx("form__item")}>
            <input
              className={cx("input")}
              type="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label className={cx("label")}>Email</label>
            {formik.touched.email && formik.errors.email ? (
              <p className={cx("error__message")}>{formik.errors.email}</p>
            ) : null}
          </div>
          <div className={cx("form__item")}>
            <div className={cx("surround__item")}>
              <input
                className={cx("input")}
                type={typePass}
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label className={cx("label")}>Password</label>
              <div className={cx("icon")} onClick={() => handleFilter()}>
                <FontAwesomeIcon icon={typeIcon} />
              </div>
            </div>
            {formik.touched.password && formik.errors.password ? (
              <p className={cx("error__message")}>{formik.errors.password}</p>
            ) : null}
          </div>

          <button type="submit" className={cx("btn-submit")}>
            LOGIN
          </button>

          <div className={cx("support")}>
            <p className={cx("question")}>Don't have an account ?</p>
            <Link to="/register" className={cx("link")}>
              Create one
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
