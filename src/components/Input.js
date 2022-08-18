import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/todoSlice';

function Input() {

    const inputRef = useRef();
    const dispatch = useDispatch();
    const addTodo = (e) => {
        e.preventDefault();
        dispatch(saveTodo({
            item: inputRef.current.value,
            id: Date.now(),
            done: false,
        }));
        inputRef.current.value = "";
    }

  return (
        <form className='w-full flex items-center justify-between mb-2'>
            <input type="text" className='flex-1 border px-3 py-5 text-sm rounded-[12px] border-[#BDBDBD]' placeholder="add details" ref={inputRef}/>
            <button className='bg-[#2F80ED] rounded-[12px] ml-6 md:ml-8 hover:bg-[#2962FF] shadow-md px-10 py-5 text-sm text-white transition duration-100 ease-in-out ' onClick={addTodo}>Add</button>
        </form>
  )
}

export default Input