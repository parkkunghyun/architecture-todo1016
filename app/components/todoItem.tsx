"use client"

import { useTodos } from "../hooks/useTodos"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface Todo {
    id: number;
    title: string;
    is_completed: boolean;
}

export default function TodoItem({todo} : {todo: Todo}) {

    const { toggleComplete, deleteTodo } = useTodos()

    return (
        <div className="p-2 shadow-md mb-4 border-2 flex items-center justify-between border-gray-400 rounded-xl  w-[400px]">
            <input type="checkbox" className="mr-2"
                checked={todo.is_completed}
                onChange={() => toggleComplete(todo.id, todo.is_completed)}
            />
            <span className={`flex-1 ${todo.is_completed ? 'text-gray-300 line-through' : ''}`}>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)}><DeleteForeverIcon className="text-2xl"/></button>
        </div>
    )

}