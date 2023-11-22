import TaskDisplay from "./TaskDisplay";
import "../styles/taskmanager.css";
import { Tasks } from "../Types/taskType";
import { useReducer, useRef } from "react";
import { taskReducer } from "../functions/customFunctions";

const TaskManager = () => {
  let taskNameRef = useRef<HTMLInputElement>(null);
  let dueDateRef = useRef<HTMLInputElement>(null);
  const taskList: Tasks[] = [];

  const [state, dispatch] = useReducer(taskReducer, taskList);

  const addNewTask = () => {
    if (taskNameRef.current && dueDateRef.current) {
      dispatch({
        type: "ADD",
        name: taskNameRef.current.value,
        dueDate: dueDateRef.current.value,
      });
      taskNameRef.current.value = "";
      dueDateRef.current.value = "";
    }
  };
  return (
    <div className="main-component">
      <div className="task-form">
        <input
          type="text"
          name="task-name"
          placeholder="Enter the task"
          ref={taskNameRef}
        />
        <input
          type="text"
          name="due-date"
          placeholder="Enter the due date"
          ref={dueDateRef}
        />
        <button type="submit" onClick={addNewTask}>
          Add New Task
        </button>
      </div>
      <TaskDisplay tasks={state} dispatch={dispatch} />
    </div>
  );
};

export default TaskManager;
