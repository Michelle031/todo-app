import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Input from './components/Input';
import Nav from './components/Nav';
import Todo from './components/Todo';
import { setFilteredList, todoSelector, setTodoList } from './features/todoSlice';
import { TrashIcon } from "@heroicons/react/outline";

function App() {
  const {filteredList, status, todoList} = useSelector(todoSelector);
  const dispatch = useDispatch();



  useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todoList));
	}, [todoList]);

  
  const deleteAll = () => {
    dispatch(setFilteredList(filteredList.filter(todo => todo.done === false)));
    dispatch(setTodoList(todoList.filter(todo => todo.done === false)));
    console.log(todoList);
    console.log(filteredList);
  }

  return (
    <div className="max-w-2xl mx-auto px-6 md:px-0 text-center text-[#333333] flex flex-col justify-center mt-10">
      <h1 className='font-bold text-4xl mb-8'>#todo</h1>
      <Nav />
      {(status !== "done") && <Input />}
      {filteredList.map(todo => (
        <Todo key={todo.id} id={todo.id} item={todo.item} completed={todo.done} />
      ))}
      {(status === "done") && <button className='flex space-x-1 bg-[#EB5757] rounded-[4px] ml-8 hover:bg-[#EB5759] shadow-md px-8 py-4 text-sm text-white self-end transition duration-100 ease-in-out' onClick={deleteAll}><TrashIcon className='h-5' /> delete all</button>}
      <footer className="font-xs px-6"><p>created by <b>Michelle031</b> - devChallenges.io </p></footer>
    </div>
  );
}

export default App;
