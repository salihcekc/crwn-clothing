import "./FormInput.styles.scss";
import { FC, InputHTMLAttributes, ChangeEvent } from "react";

type FormInputProps = {
  label: string;
  type: string;
  required: boolean;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({
  label,
  type,
  required,
  changeHandler,
  name,
  value,
}) => {
  return (
    <div className="group">
      <input
        className="form-input"
        type={type}
        required={required}
        onChange={changeHandler}
        name={name}
        value={value}
      />
      {label && value && (
        <label className={`${value.length ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
