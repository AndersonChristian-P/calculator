import React from "react"
import "./Button.css"

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "="
}

const Button = props => (
  <div>
    {props.children}
  </div>
)

export default Button
