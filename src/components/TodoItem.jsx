import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { MdDelete, MdEdit } from 'react-icons/md';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { getClasses } from '../utils/getClasses';
import { deleteTodo, updateTodo } from '../slices/todoSlice';
import styles from '../styles/modules/todoItem.module.scss';
import TodoModal from './TodoModal';
import CheckButton from './CheckButton';

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

function TodoItem({ todo }) {
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (todo.status === 'complete') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const updateHandler = () => {
    setUpdateModalOpen(true);
  };

  const deleteHandler = () => {
    dispatch(deleteTodo(todo.id));
    toast.success(`"${todo.title}" removed from your todo list.`);
  };

  const checkHandler = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({
        ...todo,
        status: checked ? 'incomplete' : 'complete',
      })
    );
  };

  return (
    <>
      <motion.div className={styles.item} variants={childVariants}>
        <div className={styles.todoDetails}>
          <CheckButton checked={checked} checkHandler={checkHandler} />
          <div className={styles.texts}>
            <p
              className={getClasses([
                styles.todoText,
                todo.status === 'complete' && styles['todoText--completed'],
              ])}
            >
              {todo.title}
            </p>
            <p className={styles.time}>
              {format(new Date(todo.time), 'p, dd/MM/yyyy')}
            </p>
          </div>
        </div>
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

export default TodoItem;
