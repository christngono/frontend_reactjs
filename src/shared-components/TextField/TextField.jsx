import React from "react"
import "./Textfield.css"

const TextField = (props) => {
  const { placeholder, required, text, name } = props
  return (
    <div className="col">
      <label htmlFor="validationCustom01" className="form-label"></label>
      <input
        type={text}
        className="form-control"
        name={name}
        id="validationCustom01"
        required={required}
        placeholder={placeholder}
        {...props}
      />
      <div className="valid-feedback"> Looks good!</div>
    </div>
  )
}

export default TextField
