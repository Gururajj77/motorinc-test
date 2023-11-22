import { Dispatch, useState } from "react";
import { Action, Tasks } from "../Types/taskType";
import "../styles/taskdisplay.css";
interface tasksProps {
  tasks: Tasks[];
  dispatch: Dispatch<Action>;
}

const TaskDisplay = ({ tasks, dispatch }: tasksProps) => {
  const [Edit, setEdit] = useState(true);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="task-list">
          {Edit ? task.name : <input />}
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch({ type: "TOGGLE", id: task.id })}
          />
          {task.dueDate}
          <button type="button" onClick={() => setEdit(!Edit)}>
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskDisplay;
