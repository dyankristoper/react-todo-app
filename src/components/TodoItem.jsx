import TodoItemContainer from "./styled/TodoItemContainer.styled"

const TodoItem = ({ name }) => {
  return (
    <TodoItemContainer>
      <p>{ name }</p>
    </TodoItemContainer>
  )
}

export default TodoItem