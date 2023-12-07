// Importing necessary dependencies from React and external libraries
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { v4 as uuid } from "uuid";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";

// Importing Redux actions and styles
import { addTodo, updateTodo } from "../slices/todoSlice";
import styles from "../styles/modules/modal.module.scss";

// Importing Button component
import Button from "./Button";

// Variants for animation of modal container
const dropIn = {
  hidden: {
    opacity: 0,
    transform: "scale(0.9)",
  },
  visible: {
    transform: "scale(1)",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    transform: "scale(0.9)",
    opacity: 0,
  },
};

// Functional component for rendering the TodoModal
function TodoModal({ type, modalOpen, setModalOpen, todo }) {
  // State to manage title, status, and Redux dispatch function
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");
  const dispatch = useDispatch();

  // Effect to set initial values when modal type or todo changes
  useEffect(() => {
    if (type === "update" && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle("");
      setStatus("incomplete");
    }
  }, [type, todo, modalOpen]);

  // Handler for form submission
  const formSubmitHandler = (e) => {
    e.preventDefault();

    // Validation for empty title
    if (title === "") {
      toast.error("Error: Title is required.");
      return;
    }

    // Handling add and update actions
    if (title && status) {
      if (type === "add") {
        // Dispatching action to add a new todo
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleString(),
          })
        );
        toast.success(`"${title}" added to your todo list.`);
      }

      if (type === "update") {
        // Handling update action
        if (todo.title !== title || todo.status !== status) {
          dispatch(
            updateTodo({
              ...todo,
              title,
              status,
            })
          );
          toast.success(`"${title}" updated in your todo list.`);
        } else {
          toast.error("Error: No changes detected.");
          return;
        }
      }

      // Closing the modal after successful submission
      setModalOpen(false);
    }
  };

  // Rendering the component
  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.container}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close button */}
            <motion.div
              className={styles.closeButton}
              onClick={() => setModalOpen(false)}
              onKeyDown={() => setModalOpen(false)}
              tabIndex={0}
              role="button"
              initial={{ top: 10, opacity: 0 }}
              animate={{ top: -10, opacity: 1 }}
              exit={{ top: 10, opacity: 0 }}
            >
              <MdOutlineClose />
            </motion.div>

            {/* Form for adding/updating todos */}
            <form
              className={styles.form}
              onSubmit={(e) => formSubmitHandler(e)}
            >
              <h1 className={styles.formTitle}>
                {type === "update" ? "Update" : "Add"} Task
              </h1>

              {/* Input for title */}
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>

              {/* Dropdown for status */}
              <label htmlFor="status">
                Status
                <select
                  name="status"
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Complete</option>
                </select>
              </label>

              {/* Container for buttons */}
              <div className={styles.buttonContainer}>
                {/* Submit button */}
                <Button type="submit" variant="primary">
                  {type === "update" ? "Update" : "Add"} Task
                </Button>

                {/* Cancel button */}
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setModalOpen(false)}
                  onKeyDown={() => setModalOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Exporting the TodoModal component
export default TodoModal;
