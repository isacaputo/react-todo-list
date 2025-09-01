import React from 'react';
import { TodoItem } from '../TodoItem';
import { useTodo, filters } from '../../providers/Todo';
import { ListStyled, Empty } from './TodoList.styles';
import { theme } from '../../providers/Theme/theme.config';

export const TodoList = () => {
  const { tasks, filterState, toggle, remove } = useTodo();

  let tasksFiltered = tasks;

  if (filterState === filters.active) {
    tasksFiltered = tasks.filter((task) => !task.done);
  } else if (filterState === filters.done) {
    tasksFiltered = tasks.filter((task) => task.done);
  }

  const tasksOrdered = tasksFiltered.slice().reverse();
  const count = tasksOrdered.length;

  if (!count)
    return (
      <Empty>
        <h4 style={{ color: theme.colors.primary.main }}>No items found</h4>
      </Empty>
    );

  return (
    <ListStyled role='list'>
      {tasksOrdered.map(({ id, content, done }) => (
        <TodoItem
          key={id}
          label={content}
          value={done}
          id={id}
          onToggle={() => toggle(id)}
          onRemove={() => remove(id)}
        />
      ))}
    </ListStyled>
  );
};
