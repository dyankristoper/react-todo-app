import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import InputStyled from "./styled/Input.styled";
import Button from "./styled/Button.styled";

const TodoForm = ({ tasks, dispatch }) => {
  const [ task, setTask ] = useState();
  const [ error, setError ] = useState('');

  const displayError = ( message ) => {
    setError( message );
    setTimeout(()=>{
      setError('');
    }, 1000);
  }

  const clearForm = () => {
    setTask('');
  }

  const onAddTaskEvent = (e) => {
    e.preventDefault();

    if( tasks.some( task => task.name === task ) || task === '' ){
      displayError('Invalid Input.');
    }else{
      dispatch({ type: 'ADD_TASK', payload: { id: uuidv4(), name: task, status: 'todo' } });
      clearForm();
    }
  }

  return (
    <React.Fragment>
      <form>
        <InputStyled 
          value={task} 
          onChange={e => setTask(e.target.value)} 
          placeholder='Input task here..'
        ></InputStyled>

        <Button 
          onClick={ onAddTaskEvent } >
            Add Task
        </Button>

        <p>
          <small>
            { error }
          </small>
        </p>
      </form>
    </React.Fragment>
  )
}

export default TodoForm