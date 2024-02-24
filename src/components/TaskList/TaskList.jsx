import styles from "./TaskList.module.css";
import { Task } from "../Task/Task";
import { useSelector } from "react-redux";
import { statusFilters } from "../../Redux/Filters/constants";
import { getTasks, getStatusFilter } from "../../Redux/Filters/selectors";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={styles.list}>
      {visibleTasks.map(task => (
        <li className={styles.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
