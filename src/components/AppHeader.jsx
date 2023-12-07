// Importing necessary dependencies from React
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Importing styles for the component
import styles from "../styles/modules/app.module.scss";

// Importing Button, SelectButton, and TodoModal components
import Button, { SelectButton } from "./Button";
import TodoModal from "./TodoModal";

// Importing the updateFilterStatus action from todoSlice
import { updateFilterStatus } from "../slices/todoSlice";

// Functional component for the header of the app
function AppHeader() {
  // State to control the visibility of the TodoModal
  const [modalOpen, setModalOpen] = useState(false);

  // Accessing filterStatus from the Redux store and creating a dispatch function
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const dispatch = useDispatch();

  // Function to update the filter status when the user selects a new value
  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value));
  };

  // Rendering the component
  return (
    <div className={styles.appHeader}>
      {/* Button to open the TodoModal for adding a task */}
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>

      {/* Select dropdown to filter tasks based on status */}
      <SelectButton id="status" value={filterStatus} onChange={updateFilter}>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>

      {/* TodoModal for adding a task */}
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

// Exporting the AppHeader component
export default AppHeader;
