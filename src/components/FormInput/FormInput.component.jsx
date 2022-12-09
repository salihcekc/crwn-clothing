import "./FormInput.styles.scss";

const FormInput = (props) => {
  const { label, type, required, changeHandler, name, value } = props;
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
      {label && (
        <label className={`${value.length ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
