import styled from "styled-components";
import bgContentImg from '../../assets/images/me.svg';

export const Container = styled.div`
  max-width: 1220px;
  width: 95%;

  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;

  padding: 8rem 0 2rem 0;

  margin: 0rem auto;


  .cover {
      background-image: url(${bgContentImg});
      background-size: cover;
      background-position: center;
  }
  

  .content{
    display: flex;
    flex-direction: column;

    h2{
      font-size: 2.5rem;
      font-family: 'Fredoka One', sans-serif;
      color: white;

      span{
        color: var(--color-primary);
      }
    }

    p{
      color: white;
      font-size: 1rem;
      font-family: 'Fredoka',sans-serif;
      font-weight: 400;
      margin: 2rem 0;
    }

    ul{
      list-style: none;
      display: grid;
      gap: .5rem;


      li{
        font-size: 1rem;
        font-family: 'Fredoka One';
        color: var(--color-primary);

        span{
          color: white;
          margin-right: .5rem;
        }
      }
    }
  }


  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;

    padding: 6rem 1rem;

  
    .content{
      p{
        font-size: 1.5rem;
      }

      ul{
      li{
        font-size: 1.4rem;
      }
    }
    }
    

    .cover{
      min-height: 800px;
    }

  }
`
