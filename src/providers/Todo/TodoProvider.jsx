import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import { useLocalStorage } from "../../utils";
import { isValidShape } from "./isValidShape";
import { filters } from "./enum";
import { TodoContext } from "./TodoContext";

export const TodoProvider = ({ children, tasks: tasksProp = [] }) => {
  const [tasks, setTasks] = useLocalStorage("smart-assets-todo", tasksProp);
  const [filterState, setFilterState] = React.useState(filters.all);

  const add = (value) => {
    if (!value) return;

    if (Array.isArray(value)) {
      const newTasks = [];

      value.forEach((task) => {
        if (!isValidShape(task)) return;
        newTasks.push({
          id: v4(),
          ...task,
        });
      });

      setTasks([...tasks, ...newTasks]);
    } else {
      setTasks([
        ...tasks,
        {
          id: v4(),
          done: false,
          ...value,
        },
      ]);
    }
  };

  const update = (value, id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, content: value };
        } else {
          return task;
        }
      })
    );
  };

  const toggle = (id) => {
    if (!id) return;
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              done: !task.done,
            }
          : task
      )
    );
  };

  const remove = (id) => {
    if (!id) return;
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearDone = () => setTasks(tasks.filter((task) => !task.done));

  const context = {
    tasks,
    add,
    update,
    remove,
    toggle,
    filterState,
    setFilterState,
    clearDone,
  };

  return (
    <TodoContext.Provider value={context}>{children}</TodoContext.Provider>
  );
};

TodoProvider.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
