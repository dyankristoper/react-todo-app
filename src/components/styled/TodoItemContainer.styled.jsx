import styled, { css } from 'styled-components';

const TodoItemContainer = styled.div`
    padding: 8px 16px;

    border: 1px solid lightgrey;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    width: 10rem;
    min-width: fit-content;

    > p {
        font-weight: 600;
        font-size: 18px;
    }

    .action-btn{
        display: flex;
        justify-content: flex-end;
    }

`;

export default TodoItemContainer;