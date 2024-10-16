"use client"

import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import Image from "next/image";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <div className='flex flex-col items-center mx-auto max-w-md h-[600px] m-8 shadow-lg border-2 border-blue-800 rounded-md'>
        <div className='flex items-center w-full '>
          <h1 className='px-4 my-8 text-2xl font-bold '>아키텍처를 고민한 투두리스트
          </h1>
          <AutoAwesomeMosaicIcon />
        </div>

        <AddTodo />
        <TodoList/>
      </div>
    </RecoilRoot>
  );
}
