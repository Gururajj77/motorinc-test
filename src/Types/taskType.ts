export interface Tasks {
    id: number;
    name: string;
    dueDate: string;
    completed: boolean;
}

export type Action =
    | { type: 'ADD'; name: string; dueDate: string }
    | { type: 'DELETE'; id: number }
    | { type: 'UPDATE'; id: number; newTask: string }
    | { type: 'TOGGLE'; id: number }