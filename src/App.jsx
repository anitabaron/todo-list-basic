import "./App.css";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

// const appState = {
//   tasks: [],
//   filters: {
//     status: "all",
//   },
// };

export const App = () => {
  return (
    <>
      <h2 className="mainTitle">ToDo List </h2>
      <h4 className="description">ToDo List Description</h4>
      <TaskForm />
      <TaskList />
    </>
  );
};
