import classNames from "classnames/bind";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);

const Button = ({
  type = "button",
  secondary = false,
  bgColor,
  fgColor,
  width,
  ...restProps
}) => {
  const composeClass = cx(
    styles.button,
    secondary ? styles.secondary : styles.primary,
  );

  const style = {
    backgroundColor: bgColor || "",
    color: fgColor || "",
    width: width || "",
  };

  return <button className={composeClass} style={style} {...restProps} />;
};

export default Button;
