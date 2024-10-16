"use client"

import { useState } from "react"
import { useTodos } from "../hooks/useTodos"
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';

export default function AddTodo() {

    const [title, setTitle] = useState("")
    const { addTodo } = useTodos();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title !== "") {
            addTodo(title)
            setTitle("")
        }
    }

    return (
        <form className="flex shadow-lg justify-between items-center p-2 w-[400px] mb-8 border-2 border-black rounded-lg" onSubmit={handleSubmit}>
            <input type="text"  className="flex-1 p-2" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="할일을 적어주세요" />
            <button className="" type="submit"><ControlPointOutlinedIcon className="text-4xl hover:scale-110"/></button>
        </form>
    )
}