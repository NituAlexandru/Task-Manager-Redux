import { Button } from "../Button/Button";
import styles from "./StatusFilter.module.css";
import { useSelector } from "react-redux";
import { statusFilters } from "../../Redux/constants";
import { getStatusFilter } from "../../Redux/selectors";

export const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);

  return (
    <div className={styles.wrapper}>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};
