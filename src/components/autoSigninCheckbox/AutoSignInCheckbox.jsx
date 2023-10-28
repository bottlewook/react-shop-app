import Checkbox from "@/components/checkbox/Checkbox";
import Tooltip from "@/components/tooltip/Tooltip";
import classNames from "classnames/bind";

import styles from "./AutoSignInCheckbox.module.scss";
const cx = classNames.bind(styles);

const AutoSignInCheckbox = ({
  label = "자동로그인",
  checked,
  disabled,
  orientation = "top",
  message = "개인 정보를 위해 본인 기기에서만 이용해주세요.",
  onChange,
  ...restProps
}) => {
  return (
    <div className={cx(styles.wrapper)}>
      <Checkbox
        label={label}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...restProps}
      />
      {checked && (
        <Tooltip
          left={-5}
          top={24}
          orientation={orientation}
          message={message}
        />
      )}
    </div>
  );
};

export default AutoSignInCheckbox;
