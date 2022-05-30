import styled from "styled-components";

export const Container = styled.div`
      display: grid;
      gap: .5rem;
      width: 100%;
      background-color: var(--color-dark-blue);
      padding: 1rem 2rem;


      h4{
        font-size: 1.4rem;
        font-family: 'Fredoka One', sans-serif;
        color: white;
        text-align: center;
      }

      .content{
        padding: 2rem 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: .7rem;
      }


      @media screen and (max-width:768px){
        .content{
          width: 100%;
          padding: 2rem 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: .7rem;
      }
      }
`