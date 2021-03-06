import React from "react"
import "./form-input.styles.scss"

const FormInput = ({ handleChange, label, ...autresProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...autresProps} />
    {label ? (
      <label
        className={`${
          autresProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
)
export default FormInput
