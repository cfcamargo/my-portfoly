import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem;

    color: white;
    font-size: 1rem;

    font-family: 'Fredoka', sans-serif;


    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
 `