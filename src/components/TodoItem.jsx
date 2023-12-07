// Importing necessary dependencies from React and external libraries
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { format } from "date-fns";
import { MdDelete, MdEdit } from "react-icons/md";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

// Importing utility functions and styles
import { getClasses } from "../utils/getClasses";
import { deleteTodo, updateTodo } from "../slices/todoSlice";
import styles from "../styles/modules/todoItem.module.scss";

// Importing components
import TodoModal from "./TodoModal";
import CheckButton from "./CheckButton";

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

// Functional component for a single todo item
function TodoItem({ todo }) {
  // State to manage the visibility of the update modal and the checked status
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  // Redux dispatch function
  const dispatch = useDispatch();

  // Effect to update the checked state when the todo status changes
  useEffect(() => {
    if (todo.status === "complete") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  // Handler to open the update modal
  const updateHandler = () => {
    setUpdateModalOpen(true);
  };

  // Handler to delete the todo
  const deleteHandler = () => {
    dispatch(deleteTodo(todo.id));
    toast.success(`"${todo.title}" removed from your todo list.`);
  };

  // Handler to toggle the checked status of the todo
  const checkHandler = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({
        ...todo,
        status: checked ? "incomplete" : "complete",
      })
    );
  };

  // Rendering the component
  return (
    <>
      <motion.div className={styles.item} variants={childVariants}>
        <div className={styles.todoDetails}>
          {/* CheckButton component for toggling the todo status */}
          <CheckButton checked={checked} checkHandler={checkHandler} />
          <div className={styles.texts}>
            {/* Displaying the todo title with conditional styling for completed todos */}
            <p
              className={getClasses([
                styles.todoText,
                todo.status === "complete" && styles["todoText--completed"],
              ])}
            >
              {todo.title}
            </p>

            {/* Displaying the formatted time of the todo */}
            <p className={styles.time}>
              {format(new Date(todo.time), "p, dd/MM/yyyy")}
            </p>
          </div>
        </div>

        {/* Actions for updating and deleting the todo */}
        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            onClick={updateHandler}
            onKeyDown={updateHandler}
            role="button"
            tabIndex={0}
          >
            <MdEdit />
          </div>
          <div
            className={styles.icon}
            onClick={deleteHandler}
            onKeyDown={deleteHandler}
            role="button"
            tabIndex={0}
          >
            <MdDelete />
          </div>
        </div>
      </motion.div>

      {/* Update modal for editing the todo */}
      {updateModalOpen && (
        <TodoModal
          type="update"
          todo={todo}
          modalOpen={updateModalOpen}
          setModalOpen={setUpdateModalOpen}
        />
      )}
    </>
  );
}

// Exporting the TodoItem component
export default TodoItem;
