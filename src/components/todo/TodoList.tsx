import React from "react";
import { Todo, useTodosContext } from "../../contexts/TodosContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos: Todo[] = useTodosContext();
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}
