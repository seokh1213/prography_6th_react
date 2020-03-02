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
    <li>
      {todo.isEdit ? (
        <form
          onSubmit={e => {
            e.preventDefault();
            dispatch({ type: "EDIT", id: todo.id, text: value });
          }}
        >
          <input
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
          ></input>
        </form>
      ) : (
        <>
          <span
            onClick={() => dispatch({ type: "TOGGLE", id: todo.id })}
            className={`TodoItem ${todo.done ? "done" : ""}`}
          >
            {todo.text}
          </span>
          <button
            className="Edit"
            onClick={() => dispatch({ type: "EDIT", id: todo.id })}
          >
            수정
          </button>
          <button
            className="Remove"
            onClick={() => dispatch({ type: "REMOVE", id: todo.id })}
          >
            삭제
          </button>
        </>
      )}
    </li>
  );
}
