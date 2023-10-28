import classNames from "classnames/bind";

import styles from "./Tooltip.module.scss";
const cx = classNames.bind(styles);

const Tooltip = ({
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  color = "",
  bgColor = "",
  orientation,
  message,
  ...resetProps
}) => {
  const style = {
    top,
    right,
    bottom,
    left,
    color,
    backgroundColor: bgColor,
  };

  const setOrientationClass = (type) => {
    switch (type) {
      case "top":
        return styles.orientationTop;
      case "right":
        return styles.orientationRight;
      case "bottom":
        return styles.orientationBottom;
      case "left":
        return styles.orientationLeft;
      default:
        break;
    }
  };

  return (
    <span
      role="tooltip"
      className={cx(styles.tooltip, setOrientationClass(orientation))}
      style={style}
      {...resetProps}
    >
      {message}
    </span>
  );
};

export default Tooltip;
