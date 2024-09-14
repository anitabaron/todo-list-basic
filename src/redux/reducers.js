// src/redux/reducers.js

import { statusFilters } from "./constants";

const initialState = {
  tasks: [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ],
  filters: {
    status: statusFilters.all,
  },
};

// Używamy initialState jako domyślnej wartości stanu
export const rootReducer = (state = initialState, action) => {
  // Reduktor rozróżnia akcje na podstawie wartości właściwości type
  switch (action.type) {
    // Działanie zależy od typu akcji
    case "tasks/addTask": {
      // Należy zwrócić nowy obiekt stanu
      return {
        // który zawiera wszystkie dane istniejącego stanu
        ...state,
        // oraz nową tablicę zadań
        tasks: [
          // która zawiera wszystkie istniejące zadania
          ...state.tasks,
          // oraz obiekt nowego zadania
          action.payload,
        ],
      };
    }
    case "tasks/deleteTask":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      // Każdy reduktor przyjmuje wszystkie akcje wysłane do magazynu.
      // Jeśli reduktor nie powinien obsługiwać określonego typu akcji,
      // należy zwrócić bieżący stan bez zmian.
      return state;
  }
};
