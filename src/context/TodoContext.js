import { createContext, useContext } from "react";
export const TodoContext = createContext({
  todos: [{ id: 1, todo: "This is task", complted: false }, {}, {}],
  addtodo: (todo) => {},
  updatetodo: (todo, id) => {},
  deletetodo: (id) => {},
  toggleComplte: (id) => {},
});
export const useTodo = () => {
  return useContext(TodoContext);
};
export const TodoProvider = TodoContext.Provider;
