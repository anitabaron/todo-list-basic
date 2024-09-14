import { useDispatch } from "react-redux";
import Button from "./Button";
import { addTask } from "../redux/actions";

export default function TaskForm() {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="taskForm">
      <input type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </form>
  );
}
