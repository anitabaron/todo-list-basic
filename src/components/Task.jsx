import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../redux/actions";

export default function Task({ task }) {
  // Pobieramy referencję do funkcji wysyłania akcji
  const dispatch = useDispatch();

  // Wywołujemy kreator akcji i przekazujemy identyfikator zadania
  // Wysyłamy wynik – akcję usuwającą zadanie
  const handleDelete = () => dispatch(deleteTask(task.id));
  // Wywołujemy kreator akcji i przekazujemy identyfikator zadania
  // Wysyłamy wynik – akcję przełączającą status zadania
  const handleToggle = () => dispatch(toggleCompleted(task.id));
  return (
    <div className="taskItem">
      <input type="checkbox" onChange={handleToggle} checked={task.completed} />
      <p>{task.text}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
