import React from 'react';
import TextField from '../../components/TextField';
import Buttons from '../../components/Buttons';
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addTodo } from './TodoSlice';

const AddTodo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        content: '',
        date: '',
        completed: "false"
      });
      const handleAddTodo = () => {
        setValues({ completed: false,content: '', date: '' });
        console.log(values);
        dispatch( addTodo({
            id: uuidv4() ,
            content: values.content,
            date: values.date,
            completed: "false"
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
          label="Due Date"
          value={values.date}
          onChange={(e) => setValues({ ...values, date: e.target.value })}
          inputProps={{ type: 'date', placeholder: 'Select Date' }}
        />
        <Buttons onClick={handleAddTodo}>Submit</Buttons>
        </div>
    )
}

export default AddTodo;