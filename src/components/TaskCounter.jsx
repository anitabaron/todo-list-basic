import { useSelector } from "react-redux";
import { getTasks } from "../redux/selectors";

export default function TaskCounter() {
  const tasks = useSelector(getTasks);
  // Na podstawie stanu Redux obliczamy dane pochodne
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p>Active: {count.active}</p>
      <p>Completed: {count.completed}</p>
    </div>
  );
}
