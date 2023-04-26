import React from 'react';
import { Link } from "react-router-dom";
import Buttons from '../../components/Buttons';
import {useDispatch, useSelector} from "react-redux"
import { completedTodo, deleteTodo } from './TodoSlice';

const TodoList = () => {

    // const todos = [
    //     {id: '1', content: 'Testing',date: 'Now',completed:false}
    // ];
    const dispatch = useDispatch();
    const todos = useSelector(store => store.todos);
    console.log(todos);

    const handleRemoveTodo = (id) => {
        dispatch(deleteTodo({id}))
    }

    const handleCompletedTodo = (id) => {
        dispatch(completedTodo({id}));
        // let removeButton = document.getElementById("removeBtn");
        // removeButton.style.display ="none";
        // let editButton = document.getElementById("editBtn");
        // editButton.style.display ="none";
    }

    const renderCard = () => todos.map(todo => (
        <div className="bg-gray-300 p-5 flex items-center justify-between" key={todo.id}>
          <div>
            <h3 className="font-bold text-lg text-gray-700">Content: 
            <span className="font-bold text-lg text-gray-700"> {todo.content}</span>
            </h3>
            <span className="font-normal text-gray-600">Due Date: {todo.date}</span>
            <p className="font-normal text-red-600">Completion Status: {todo.completed}</p>
          </div>
          <div className="flex gap-4">
             { todo.completed === "true" ? <></> :
              <Link to={`edit-todo/${todo.id}`}>
                {/* Icons from heroicon */}
              <button >
                <svg xmlns="http://www.w3.org/2000/svg" id='editBtn' className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </Link>}
            { todo.completed === "true" ? <></> :
            <button
             onClick={() => handleRemoveTodo(todo.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" id="removeBtn" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button> 
            }
            <button
             onClick={() => handleCompletedTodo(todo.id)}
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>           
            </button>
          </div>
        </div>
      ))

    return(
        <div>
      <Link to="/add-todo">
      <Buttons>
      <span> + Add Todo</span>
      </Buttons>
      </Link>
        <div className="grid gap-5 md:grid-cols-2">
        {todos.length ? renderCard() : 
        <p className="text-center col-span-2 text-gray-700 font-semibold">No Tasks</p>}
      </div>
      </div>
    )
}

export default TodoList