import React from "react";
import { render, screen } from "../../tests/test-todo-utils";
import userEvent from "@testing-library/user-event";

import TodoProvider from "./TodoProvider";

describe("<TodoProvider />", () => {
  const originalOffsetHeight = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    "offsetHeight"
  );
  const originalOffsetWidth = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    "offsetWidth"
  );

  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
      configurable: true,
      value: 50,
    });
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
      configurable: true,
      value: 50,
    });
  });

  afterAll(() => {
    Object.defineProperty(
      HTMLElement.prototype,
      "offsetHeight",
      originalOffsetHeight
    );
    Object.defineProperty(
      HTMLElement.prototype,
      "offsetWidth",
      originalOffsetWidth
    );
  });
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
  });

  test("should add a new task", () => {
    render(
      <TodoProvider>
        <TodoProvider.Form />
        <TodoProvider.List />
        <TodoProvider.Action />
      </TodoProvider>
    );

    const input = screen.getByRole("textbox");

    userEvent.type(input, "Item 1");
    userEvent.type(input, "{enter}");

    expect(screen.getByText("Item 1")).toBeInTheDocument();
  });

  test("should remove task", () => {
    const tasks = [
      {
        id: 1,
        content: "Buy IPA",
        done: false,
      },
    ];

    const { container } = render(
      <TodoProvider tasks={tasks}>
        <TodoProvider.Form />
        <TodoProvider.List />
        <TodoProvider.Action />
      </TodoProvider>
    );

    const item = container.querySelector('[role="listitem"]');

    expect(item).toBeInTheDocument();
    const removeButton = container.querySelector(
      '[aria-label="Remove Buy IPA"]'
    );
    userEvent.click(removeButton);
    expect(item).not.toBeInTheDocument();
  });

  test("should toggle task", () => {
    const tasks = [
      {
        id: 1,
        content: "Buy IPA",
        done: false,
      },
    ];

    render(
      <TodoProvider tasks={tasks}>
        <TodoProvider.Form />
        <TodoProvider.List />
        <TodoProvider.Action />
      </TodoProvider>
    );

    expect(screen.getByText("1 task left")).toBeInTheDocument();
    userEvent.click(screen.getByRole("checkbox"));
    expect(screen.getByText("0 task left")).toBeInTheDocument();
  });
});
