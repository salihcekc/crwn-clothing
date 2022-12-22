/*
default

incerted

goggle sign in
*/

import { FC, ButtonHTMLAttributes } from "react";
import "./Button.styles.scss";

export enum BUTTON_TYPE_CLASSES {
  google = "google-sign-in",
  inverted = "inverted",
  default = "default",
}

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  return (
    <button
      disabled={isLoading}
      className={`button-container ${BUTTON_TYPE_CLASSES.default}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
