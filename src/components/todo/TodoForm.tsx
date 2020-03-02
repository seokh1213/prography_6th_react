import React, { FormEvent, useState } from "react";
import { useTodosDipatchContext } from "../../contexts/TodosContext";

export default function TodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useTodosDipatchContext();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value !== "") {
      dispatch({
        type: "CREATE",
        text: value
      });
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-100 form-control form-control-lg rounded-0"
        type="text"
        placeholder="무엇을 해야하나요?"
        value={value}
        onChange={e => setValue(e.target.value)}
      ></input>
    </form>
  );
}
