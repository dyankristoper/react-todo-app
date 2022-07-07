import TodoItemContainer from "./styled/TodoItemContainer.styled";
import Button from "./styled/Button.styled";

const TodoItem = ({ id, name, status, dispatch }) => {
  const pendingStatus = 'todo';

  return (
    <TodoItemContainer status={ status }>
      <p>{ name }</p>
      <div className='action-btn'>
        {
          status.toLowerCase() === pendingStatus &&
          <Button 
            success
            onClick={ () => dispatch({ type: 'MARK_AS_DONE', payload: { id }}) }  
          >
            Done
          </Button>
        }
        <Button 
          danger 
          onClick={ () => dispatch({ type: 'REMOVE_TASK', payload: { id }})}
        >
          Delete
        </Button>
      </div>
    </TodoItemContainer>
  )
}

export default TodoItem