import React from "react"
import "./custom-button.styles.scss"

const CustomButton = ({ children, isGoogleSignIn, ...autresProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...autresProps}
  >
    {children}
  </button>
)
export default CustomButton
