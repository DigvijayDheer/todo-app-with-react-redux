// Importing necessary dependencies from React
import React from "react";

// Importing styles for the component
import styles from "../styles/modules/button.module.scss";

// Importing the getClasses utility function
import { getClasses } from "../utils/getClasses";

// Enum defining button types for styling
const buttonTypes = {
  primary: "primary",
  secondary: "secondary",
};

// Functional component for a generic button
function Button({ children, type, variant, ...rest }) {
  return (
    // Button element with dynamic class names based on variant and styles
    <button
      type={type === "submit" ? "submit" : "button"}
      className={getClasses([
        styles.button,
        styles[`button--${buttonTypes[variant]}`],
      ])}
      {...rest}
    >
      {children}
    </button>
  );
}

// Functional component for a select dropdown styled as a button
function SelectButton({ children, ...rest }) {
  return (
    // Select element styled as a button with shared styles
    <select
      className={getClasses([styles.button, styles.button__select])}
      {...rest}
    >
      {children}
    </select>
  );
}

// Exporting SelectButton as a named export and Button as a default export
export { SelectButton };
export default Button;
