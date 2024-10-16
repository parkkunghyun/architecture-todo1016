import { useRecoilState } from "recoil"
import { todoListState } from "../recoil/atom"
import { supabase } from "../lib/supabaseClient"


export const useTodos = () => {
    const [todos, setTodos] = useRecoilState(todoListState)


    const fetchTodos = async () => {
        const { data } = await supabase.from('todo2').select('*');
        if (data) {
            setTodos(data)
        }
    }

    const addTodo = async (title: string) => {
        const { data, error } = await supabase.from('todo2').insert([{ title, is_completed: false }]).select();
        if (data) {
            setTodos((prev) => [...prev, ...data])
            console.log(todos)
        }
    }

    const toggleComplete = async (id: number, is_completed: boolean) => {
        await supabase
          .from('todo2')
          .update({ is_completed: !is_completed })
          .eq('id', id);
        setTodos((prev : any) =>
          prev.map((todo: any) =>
            todo.id === id ? { ...todo, is_completed: !is_completed } : todo
          )
        );
    };

    const deleteTodo = async (id: number) => {
        await supabase.from('todo2').delete().eq('id', id);
        setTodos((prev: any) =>
            prev.filter((todo: any) => todo.id !== id)
          );
    }

    return { todos, fetchTodos, toggleComplete, addTodo, deleteTodo};

}