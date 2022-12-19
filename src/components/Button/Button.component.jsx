/*
default


incerted


goggle sign in
*/

import "./Button.styles.scss";

export const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  default: "default",
};

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  return (
    <button
      disabled={isLoading}
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
