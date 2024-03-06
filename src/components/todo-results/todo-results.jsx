import * as React from "react";
import "./todo-results.scss";

export const TodoResults = ({ todos }) => {
  const calculateChecked = () => {
    return todos.filter(todo => todo.checked).length;
  };

  return (
    <div className="todo-results">
      Done: {calculateChecked()}
    </div>
  );
};
