import styled, { css } from 'styled-components';

const Button = styled.button`
    border: 1px solid lightgrey;
    border-radius: 4px;
    padding: 4px 12px;

    ${ props => props.danger && css` 
        background-color: lightcoral;
        border-color: lightcoral;
        margin-left: 8px;
    `}

    ${ props => props.success && css`
        background-color: lightblue;
        border-color: lightblue;
    `}
`;

export default Button;