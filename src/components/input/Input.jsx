import classNames from "classnames/bind";
import styles from "./Input.module.scss";
import Icon from "@/components/icon/Icon";
import { useState } from "react";
const cx = classNames.bind(styles);

const Input = ({
  id,
  label,
  name = "",
  labelVisible,
  icon,
  email,
  password,
  placeholder = "",
  readOnly,
  disabled,
  value,
  error: errorProps,
  className = "",
  onChange,
  ...restProps
}) => {
  const [inputValue, setInputValue] = useState(value ? value : "");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const checkType = () => {
    if (email) {
      return "email";
    }

    if (password) {
      return isPasswordVisible ? "text" : "password";
    }

    return "text";
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  const iconType = isPasswordVisible ? "show" : "hide";
  const iconLabel = `비밀번호 ${isPasswordVisible ? "표시" : "감춤"}`;

  return (
    <div className={cx(styles.formControl, className)}>
      <label
        htmlFor={id}
        className={cx(styles.label, labelVisible || styles.labelHidden)}
      >
        {label}
      </label>
      <div
        className={cx(
          styles.inputWrapper,
          errorProps && styles.inputWrapperError,
        )}
      >
        {icon ? <Icon type={icon} /> : null}
        <input
          id={id}
          type={checkType()}
          name={name}
          className={cx(styles.input)}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
          value={inputValue}
          onChange={handleChange}
          {...restProps}
        />
        {password ? (
          <button
            type="button"
            className={cx(styles.button)}
            onClick={() => setIsPasswordVisible((prev) => !prev)}
            disabled={disabled}
          >
            <Icon type={iconType} alt={iconLabel} title={iconLabel} />
          </button>
        ) : null}
      </div>
      {errorProps && (
        <span role="alert" className={cx(styles.error)}>
          {errorProps.message}
        </span>
      )}
    </div>
  );
};

export default Input;
