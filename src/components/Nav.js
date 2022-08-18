import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredList, setStatus,todoSelector } from '../features/todoSlice';

function Nav() {

    const dispatch = useDispatch();
    const {todoList, status} = useSelector(todoSelector);

    const selectStatus = (e) =>  {
        dispatch(setStatus(e.target.title));
    }

    useEffect(() => {
        switch (status) {
          case "all":
              dispatch(setFilteredList(todoList));
              break;
          case "active":
              dispatch(setFilteredList(todoList.filter(todo => todo.done === false)));
              break;
          case "done":
              dispatch(setFilteredList(todoList.filter(todo => todo.done === true)));
              break;
          default:
              break;
      }
    }, [status, dispatch, todoList]);
    

  return (
    <div className="w-full mb-5 flex justify-around text-sm font-semibold border-b border-[#BDBDBD]">
        <p onClick={selectStatus} title="all" className={`py-3 px-6 md:px-9 ${(status === 'all') && "active"}`}>All</p>
        <p onClick={selectStatus} title="active" className={`py-3 px-6 md:px-9 ${(status === 'active') && "active"}`}>Active</p>
        <p onClick={selectStatus} title="done" className={`py-3 px-6 md:px-9 ${(status === 'done') && "active"}`}>Completed</p>
    </div>
  )
}

export default Nav;