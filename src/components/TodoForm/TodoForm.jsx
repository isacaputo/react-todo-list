import { useState } from "react";
import { useTodo, isValidShape } from "../../providers/Todo";
import { isJson } from "../../utils";
import { LabelStyled, InputStyled, FormStyled } from "./TodoForm.styles";

function isValidObject(object) {
  const tasks = object?.tasks;
  if (!tasks) return false;
  if (!Array.isArray(tasks)) return false;
  return tasks.some((task) => isValidShape(task));
}

export const TodoForm = () => {
  const { add } = useTodo();
  const [value, setValue] = useState("");

  const handleChange = (event) => setValue(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value.trim()) return;

    const json = isJson(value);

    if (json && isValidObject(json)) {
      add(json?.tasks);
    } else {
      add({ content: value });
    }

    setValue("");
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <LabelStyled htmlFor="todoInput">Input what needs to be done</LabelStyled>
      <InputStyled
        id="todoInput"
        placeholder="What needs to be done?"
        type="text"
        value={value}
        onChange={handleChange}
        name="todo"
      />
    </FormStyled>
  );
};
