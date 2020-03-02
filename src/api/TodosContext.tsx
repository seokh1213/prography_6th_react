import React, { createContext, Dispatch, useContext, useReducer } from "react";

export type Todo = {
  id: number;
  text: string;
  isEdit: boolean;
  done: boolean;
};

type TodoState = Todo[];

const TodosStateContext = createContext<TodoState | undefined>(undefined);

type Action =
  | { type: "CREATE"; text: string }
  | { type: "EDIT"; id: number; text?: string }
  | { type: "REMOVE"; id: number }
  | { type: "TOGGLE"; id: number };

type TodosDispatch = Dispatch<Action>;

const TodosDispatchContext = createContext<TodosDispatch | undefined>(
  undefined
);

function todosReducer(state: TodoState, action: Action): TodoState {
  switch (action.type) {
    case "CREATE":
      const newId = Math.max(...state.map(todo => todo.id)) + 1;
      return state.concat({
        id: Number.isFinite(newId) ? newId : 0,
        text: action.text,
        isEdit: false,
        done: false
      });
    case "EDIT":
      return state.map(todo =>
        todo.id === action.id
          ? {
              ...todo,
              isEdit: !todo.isEdit,
              text: action.text ? action.text : todo.text
            }
          : todo
      );
    case "REMOVE":
      return state.filter(todo => todo.id !== action.id);
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      throw new Error("Unhandled Action");
  }
}

export function TodosContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [todos, dispatch] = useReducer(todosReducer, []);

  return (
    <TodosDispatchContext.Provider value={dispatch}>
      <TodosStateContext.Provider value={todos}>
        {children}
      </TodosStateContext.Provider>
    </TodosDispatchContext.Provider>
  );
}

export function useTodosContext() {
  const state = useContext(TodosStateContext);
  if (!state) throw new Error("TodosProvider is not found");
  return state;
}

export function useTodosDipatchContext() {
  const dispatch = useContext(TodosDispatchContext);
  if (!dispatch) throw new Error("TodosProvider is not found");
  return dispatch;
}
