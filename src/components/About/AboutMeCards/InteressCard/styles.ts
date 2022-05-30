import styled from "styled-components";

export const CardContent = styled.div`
      display: grid;
      gap: .5rem;
      width: 100%;
      background-color: var(--color-dark-blue);
      padding: 1rem 2rem;

      h4{
            color: white;
            font-size: 1.4rem;
            font-family: 'Fredoka One', sans-serif;
            text-align: center;
      }

      .interessItems{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 4rem;
            justify-content: flex-start;
           
      }


      @media screen and (max-width: 768px){

       .interessItems{
            
              grid-template-columns: 1fr 1fr;
              gap: 1rem;
             
           
      }
            
      }
`