"use client"

import { useEffect } from "react"
import { useTodos } from "../hooks/useTodos"
import TodoItem from "./todoItem"

export default function TodoList() {
    const { todos, fetchTodos, toggleComplete, deleteTodo } = useTodos()

    useEffect(() => {
        fetchTodos();
    }, [])

    return (
        <ul>
            {
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))
            }
        </ul>
    )
}