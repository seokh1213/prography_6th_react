import React from "react";
import { Todo, useTodosContext } from "../../contexts/TodosContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos: Todo[] = useTodosContext();
  return (
    <div className="d-flex flex-column">
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
}
