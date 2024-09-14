import { useSelector } from "react-redux";
import Task from "./Task";
import { statusFilters } from "../redux/constants";
import { getStatusFilter, getTasks } from "../redux/selectors";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

export default function TaskList() {
  // Pobieramy tablicę zadań ze stanu Redux
  const tasks = useSelector(getTasks);
  // Pobieramy wartość filtra ze stanu Redux
  const statusFilter = useSelector(getStatusFilter);
  // Obliczamy tablicę zadań do wyświetlenia w interfejsie
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <>
      <ul>
        {visibleTasks.map((task) => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </>
  );
}
