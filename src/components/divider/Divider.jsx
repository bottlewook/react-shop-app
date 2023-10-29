import classNames from "classnames/bind";
import styles from "./Divider.module.scss";
const cx = classNames.bind(styles);
const Divider = ({ space = 22, color = "#ccc", className = "", restProps }) => {
  const style = {
    marginTop: space,
    marginBottom: space,
    backgroundColor: color,
  };
  return (
    <div
      role="presentation"
      className={cx(styles.line, className)}
      style={style}
      {...restProps}
    />
  );
};

export default Divider;
