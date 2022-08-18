import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: JSON.parse(localStorage.getItem('todos')) || [],
    filteredList: JSON.parse(localStorage.getItem('todos')) || [],
    status: "all",
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
      saveTodo: (state, action) => {
          state.todoList.push(action.payload)
      },
      setCheck: (state, action) => {
        state.todoList.forEach(item => {
          if(action.payload === item.id) {
              if (item.done === true) {
                  item.done = false;
              }
              else {
                  item.done = true;
              }
          }
      })
      },
      setStatus: (state, action) => {
        state.status = action.payload;
      },
      setTodoList: (state, action) => {
        state.todoList = action.payload;
      },
      setFilteredList: (state, action) => {
        state.filteredList = action.payload;
      },
  }
});

export const { saveTodo, setCheck, setStatus, setFilteredList, setTodoList } = todoSlice.actions;

export const todoSelector = state => state.todos;

export default todoSlice.reducer;