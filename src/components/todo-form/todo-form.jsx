import * as React from "react";
import "./todo-form.scss";

export const TodoForm = ({ setTodos }) => {
  const [task, setTask] = React.useState("");

  const handleAddTodo = () => {
    if (task.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        label: task,
        checked: false
      };
      setTodos(prevTodos => [...prevTodos, newTodo]);
      setTask("");
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input placeholder="Enter new task" value={task} onChange={(e) => setTask(e.target.value)} onKeyUp={handleKeyUp} />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
