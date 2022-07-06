import TodoItemContainer from "./styled/TodoItemContainer.styled";
import Button from "./styled/Button.styled";

const TodoItem = ({ name, status }) => {
  return (
    <TodoItemContainer status={ status }>
      <p>{ name }</p>
      <div className='action-btn'>
        <Button success>Done</Button>
        <Button danger>Delete</Button>
      </div>
    </TodoItemContainer>
  )
}

export default TodoItem