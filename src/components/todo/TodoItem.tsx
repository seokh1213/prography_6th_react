import React, { useState } from "react";
import { useTodosDipatchContext } from "../../contexts/TodosContext";

export type TodoItemProps = {
  todo: {
    id: number;
    text: string;
    isEdit: boolean;
    done: boolean;
  };
};

export default function TodoItem({ todo }: TodoItemProps) {
  const [value, setValue] = useState(todo.text);
  const dispatch = useTodosDipatchContext();
  return (
    <div className="d-flex w-100 bg-white border border-top-0 todo-item">
      {todo.isEdit ? (
        <form
          className="w-100"
          onSubmit={e => {
            e.preventDefault();
            dispatch({ type: "EDIT", id: todo.id, text: value });
          }}
        >
          <input
            className="w-100 form-control form-control-lg rounded-0 border-top-0 border-right-0 border-left-0"
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
          ></input>
        </form>
      ) : (
        <>
          <span
            onClick={() => dispatch({ type: "TOGGLE", id: todo.id })}
            className={`todo-text ${todo.done ? "done" : ""} overflow-hidden`}
          >
            {todo.text}
          </span>

          <button
            className="btn text-primary"
            onClick={() => dispatch({ type: "EDIT", id: todo.id })}
          >
            수정
          </button>
          <button
            className="btn text-danger"
            onClick={() => dispatch({ type: "REMOVE", id: todo.id })}
          >
            삭제
          </button>
        </>
      )}
    </div>
  );
}
