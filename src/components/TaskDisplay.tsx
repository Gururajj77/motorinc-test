import { Dispatch, useState } from "react";
import { Action, Tasks } from "../Types/taskType";
import "../styles/taskdisplay.css";
interface tasksProps {
  tasks: Tasks[];
  dispatch: Dispatch<Action>;
}

const TaskDisplay = ({ tasks, dispatch }: tasksProps) => {
  const [editState, setEditState] = useState("");

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="task-list">
          {!task.editable ? (
            task.name
          ) : (
            <input
              value={editState}
              onChange={(e) => setEditState(e.target.value)}
            />
          )}
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch({ type: "TOGGLE", id: task.id })}
          />
          {task.dueDate}

          {!task.editable ? (
            <button
              type="button"
              onClick={() => (
                dispatch({ type: "EDIT", id: task.id }), setEditState(task.name)
              )}
            >
              Edit
            </button>
          ) : (
            <button
              type="button"
              onClick={() =>
                dispatch({
                  type: "UPDATE",
                  id: task.id,
                  newTask: editState,
                })
              }
            >
              Update
            </button>
          )}

          <button
            type="button"
            onClick={() => dispatch({ type: "DELETE", id: task.id })}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskDisplay;
