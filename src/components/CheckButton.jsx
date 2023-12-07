// Importing necessary dependencies from React and Framer Motion
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

// Importing styles for the component
import styles from "../styles/modules/todoItem.module.scss";

// Variants for animation of the check button and check mark
const checkVariants = {
  initial: {
    color: "#fff",
  },
  checked: {
    pathLength: 1,
  },
  unchecked: {
    pathLength: 0,
  },
};

// Variants for animation of the check button background
const boxVariants = {
  checked: {
    background: "var(--primaryPurple)",
    transition: { duration: 0.1 },
  },
  unchecked: {
    background: "var(--gray-1)",
    transition: { duration: 0.1 },
  },
};

// Functional component for the check button in a TodoItem
function CheckButton({ checked, checkHandler }) {
  // Motion value for animating the path length and opacity
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  // Rendering the component
  return (
    <motion.div
      className={styles.svgBox}
      variants={boxVariants}
      animate={checked ? "checked" : "unchecked"}
      onClick={checkHandler}
    >
      <motion.svg
        className={styles.svg}
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={checkVariants}
          animate={checked ? "checked" : "unchecked"}
          style={{ pathLength, opacity }}
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </motion.svg>
    </motion.div>
  );
}

// Exporting the CheckButton component
export default CheckButton;
