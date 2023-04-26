import React from "react";
import TextField from '../../components/TextField';
import Buttons from '../../components/Buttons';
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate,useParams } from "react-router-dom"
import { editTodo } from "./TodoSlice";

const EditTodos = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const todos = useSelector(store => store.todos);
    const navigate = useNavigate();
    const existingTodo = todos.filter(todo => todo.id === params.id);
    const { content, date } = existingTodo[0];  
    const [values, setValues] = useState({
        content,
        date
      });
      const handleEditTodo = () => {
        setValues({ content: '', date: '' });
        dispatch(editTodo({
          id: params.id,
          content: values.content,
          date: values.date
        }));
        navigate('/');
      }

    return(
        <div className="mt-10 max-w-xl mx-auto">
        <TextField
          label="Content"
          value={values.content}
          onChange={(e) => setValues({ ...values, content: e.target.value })}
          inputProps={{ type: 'text', placeholder: 'Write Content' }}
        />
        <br />
        <TextField
          label="Date"
          value={values.date}
          onChange={(e) => setValues({ ...values, date: e.target.value })}
          inputProps={{ type: 'date', placeholder: 'Select Date' }}
        />
        <Buttons onClick={handleEditTodo}>Edit</Buttons>
        </div>
    )
}

export default EditTodos