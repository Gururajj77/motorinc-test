import { Action, Tasks } from "../Types/taskType";



export function taskReducer(state: Tasks[], action: Action) {

    switch (action.type) {
        case 'ADD':
            return [...state, {
                id: Date.now(),
                name: action.name,
                dueDate: action.dueDate,
                completed: false,
                editable: false
            }
            ]
        case 'DELETE':
            return state.filter(task => task.id !== action.id);
        case 'EDIT':
            return state.map((task) =>
                task.id === action.id ? { ...task, editable: !task.editable } : task
            );
        case 'UPDATE':
            return state.map((task) =>
                task.id === action.id ? { ...task, editable: !task.editable, name: (action.newTask != "" ? action.newTask : task.name) } : task
            );
        case 'TOGGLE':
            return state.map((task) =>
                task.id === action.id ? { ...task, completed: !task.completed } : task
            );

        default:
            return state
    }
}