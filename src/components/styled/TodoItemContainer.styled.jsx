import styled, { css } from 'styled-components';

const TodoItemContainer = styled.div`
    padding: 4px;

    border: 1px solid lightgrey;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    width: fit-content;

    > p {
        font-weight: 600;
        font-size: 18px;
    }

    .action-btns{
        display: flex;
        justify-content: flex-end;
    }

    ${ props => props.status === 'pending' ? css`border-color: red` : css` border-color: blue `}

    

`;

export default TodoItemContainer;