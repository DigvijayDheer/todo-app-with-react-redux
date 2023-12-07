// Importing necessary dependencies from React and Redux
import React from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

// Importing TodoItem component
import TodoItem from "./TodoItem";

// Importing styles for the component
import styles from "../styles/modules/app.module.scss";

// Variants for animation of the content container
const containerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Variants for animation of child elements
const childVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Functional component for the main content of the app
function AppContent() {
  // Accessing todoList and filterStatus from the Redux store
  const todoList = useSelector((state) => state.todo.todoList);
  const filterStatus = useSelector((state) => state.todo.filterStatus);

  // Sorting the todoList based on time in descending order
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  // Filtering the todoList based on the selected status
  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === "all") {
      return true;
    }

    return item.status === filterStatus;
  });

  // Rendering the component
  return (
    <motion.div
      className={styles.content__wrapper}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {/* Checking if there are todos to display */}
        {filteredTodoList && filteredTodoList.length > 0 ? (
          // Mapping through filteredTodoList and rendering TodoItem for each todo
          filteredTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          // Displaying a message if there are no tasks to display
          <motion.p className={styles.emptyText} variants={childVariants}>
            No tasks to display.
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Exporting the AppContent component
export default AppContent;
