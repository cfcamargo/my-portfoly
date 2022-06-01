import styled from "styled-components";


export const Container = styled.section`
    width: 95%;
    max-width: 1220px;
    margin: 0 auto;
    padding: 4rem 0;

`


export const PortfolyHeader = styled.div`
      width: 100%;
      
      
      h3{
        font-size: 2.5rem;
        color: white;
        font-family: 'Fredoka One', sans-serif;
        text-align: center;

        span{
          color: var(--color-primary);
        }
      }

      p{
          text-align: center;
          color: white;
          font-size: 1rem;
          
          font-family: 'Fredoka', sans-serif;
          max-width: 800px;
          width: 80%;

          margin: 2rem auto;
        }

  @media screen and (max-width:768px){
          h3{
            font-size: 2.8rem;
          }

          p{
            font-size: 1.4rem;
          }
        }
`


export const PortfolyBody = styled.div`

    margin: 4rem auto;
    display: flex;
    align-items: center;
    justify-content: center;

    

    .contentBody{
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      row-gap: 3rem;
    }

    @media screen and (max-width: 768px) {
        .contentBody{
          grid-template-columns: 1fr;
        }
    }

`