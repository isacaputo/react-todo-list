import React from "react";
import { TodoContext } from "./TodoContext";

export const useTodo = () => {
  const context = React.useContext(TodoContext);
  if (!context) {
    throw Error(
      "The `useTodo` hook needs of <TodoProvider /> to get the context"
    );
  }
  return context;
};
