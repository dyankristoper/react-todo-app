import TodoItemContainer from "./styled/TodoItemContainer.styled";
import Button from "./styled/Button.styled";

const TodoItem = ({ id, name, status, dispatch }) => {
  return (
    <TodoItemContainer status={ status }>
      <p>{ name }</p>
      <div className='action-btn'>
        <Button 
          success
        >
            Done
        </Button>
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