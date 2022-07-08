import styled from 'styled-components';

const MainContainer = styled.main`
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        justify-content: center;
    }

    > div:nth-child(2){
        justify-content: space-evenly;
    }
`;

export default MainContainer;