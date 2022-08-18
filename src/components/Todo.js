import React from 'react';
import { TrashIcon } from "@heroicons/react/outline";
import { setCheck, setFilteredList,  setTodoList,  todoSelector } from '../features/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

function Todo({item, id, completed}) {
    const {status, todoList, filteredList } = useSelector(todoSelector);
    const dispatch = useDispatch();
    const deleteTodo = () => {
        dispatch(setTodoList(todoList.filter(todo => todo.id !== id)));
        dispatch(setFilteredList(filteredList.filter(todo => todo.id !== id)));
    }
    const handleCheck = () => {
        dispatch(setCheck(id));
    }
  return (
    <div className='flex text-black text-lg items-center justify-between py-3'>
        <div className='flex space-x-1 items-center '>
            <input type="checkbox" className="scale-110" defaultChecked={completed} onChange={handleCheck}  />
            <p className={`${completed === true && "line-through text-[#333333]"}`}>{item}</p>
        </div>
        {(status === "done") && <TrashIcon className='h-5' onClick={deleteTodo}/>}
    </div>
  )
}

export default Todo;