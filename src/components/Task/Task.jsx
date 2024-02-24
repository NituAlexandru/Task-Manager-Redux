import { MdClose } from "react-icons/md";
import styles from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../Redux/Filters/actions";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={styles.text}>{task.text}</p>
      <button className={styles.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
