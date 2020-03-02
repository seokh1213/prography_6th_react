import React from "react";
import "../../css/Todo.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoContainer() {
  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h3 className="text-danger">Todos</h3>
      <div className="d-flex flex-column TodosContainer shadow">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}
