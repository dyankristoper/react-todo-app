import { useState, useReducer } from 'react';

import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

const initialState = {
  items: [
    { id: 1, name: "Wake up", status: "todo" },
    { id: 2, name: "Take a bath", status: "inprogress" },
    { id: 3, name: "Eat", status: "completed" },
  ]
};

const todoReducer = ( state, action ) => {
  switch( action.type ){
    case 'ADD_TASK': 
      return { ...state, items: [ ...state.items, action.payload ] }
    case 'REMOVE_TASK':
      return { ...state, items: state.items.filter( item => item.id != action.payload.id ) }
    default:
      return state;
  }
}

const App = () => {

  const [ state, dispatch ] = useReducer( todoReducer, initialState );

  return (
    <main>
      <div>
        <TodoForm dispatch={ dispatch } tasks={ state.items } />
      </div>
      <div>
        {
          state.items.map( item => <TodoItem id={item.id} name={item.name} status={item.status} key={item.id} dispatch={ dispatch } /> )
        }
      </div>
    </main>
  )
}

export default App;