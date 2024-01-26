import React from "react";
import { useTodo, filters } from "../../providers/Todo";
import { Root, Display, ActionButton } from "./TodoAction.styles";

export const TodoAction = React.memo(() => {
  const { tasks, filterState, setFilterState, clearDone } = useTodo();

  const leftTasks = tasks.filter((task) => !task.done);

  const isActive = (type) => {
    if (!type) return;
    return filterState === type;
  };

  return (
    <Root>
      <Display>{leftTasks.length} tasks left</Display>
      <div>
        <ActionButton
          onClick={() => setFilterState(filters.all)}
          className={`${isActive(filters.all) && "active"} ${"first"}`}
        >
          all
        </ActionButton>
        <ActionButton
          onClick={() => setFilterState(filters.active)}
          className={`${isActive(filters.active) && "active"} ${"middle"}`}
        >
          active
        </ActionButton>
        <ActionButton
          onClick={() => setFilterState(filters.done)}
          className={`${isActive(filters.done) && "active"} ${"last"}`}
        >
          completed
        </ActionButton>
      </div>
      <ActionButton onClick={clearDone} className="default">
        clear
      </ActionButton>
    </Root>
  );
});
