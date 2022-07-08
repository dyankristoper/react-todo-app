import { useEffect, useReducer } from 'react';

/* Components */
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

/* Styled Components */
import MainContainer from './components/styled/MainContainer.styled';

/* Data */
import reducer from './reducers/rootReducer';

const App = () => {

  const [ state, dispatch ] = useReducer( reducer.rootReducer, reducer.initialState );

  return (
    <MainContainer>
      <div>
        <TodoForm dispatch={ dispatch } tasks={ state.todo } />
      </div>
      <div>
        {
          state.todo.map( item => <TodoItem id={item.id} name={item.name} status={item.status} key={item.id} dispatch={ dispatch } /> )
        }
      </div>
    </MainContainer>
  )
}

export default App;