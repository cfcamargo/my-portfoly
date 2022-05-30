import styled from "styled-components";

export const Container = styled.div`

    width: 80%;
    max-width: 600px;
    display: grid;

    grid-template-rows: minmax(1fr, auto) 1fr;
    background-color: var(--color-bg-blue) !important;

    -webkit-box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.75);


    .cover{
      width: 100%;
        img{
        width: 100%;
        }
    }

    .content{
      padding: 2rem 3rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .project-description{
        display:grid;
        gap: 1rem;

        h3{
          font-size: 1.3rem;
          color: var(--color-primary);
          font-family: 'Fredoka One', sans-serif;
        }

        p{
          color: white;
          font-family: 'Fredoka', sans-serif;
          font-size: .9rem;
        }
      }

      .project-tecnologys{
        h4{
          color: var(--color-primary);
          margin-top: 2rem;
          font-size: 1.2rem;
          font-family: 'Fredoka', sans-serif;
        }

        .tecnologys-icons{
          display: flex;
          gap: .5rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }
      }
    }


`