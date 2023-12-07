// Importing necessary dependencies from React
import React from "react";

// Importing styles for the component
import styles from "../styles/modules/title.module.scss";

// Functional component for the page title
function PageTitle({ children, ...rest }) {
  // Rendering the component with the specified styles
  return (
    <p className={styles.title} {...rest}>
      {children}
    </p>
  );
}

// Exporting the PageTitle component
export default PageTitle;
