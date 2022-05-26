import styled from "styled-components";

export const Container = styled.div`
  max-width: 1220px;
  width: 95%;

  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;

  padding: 8rem 0;

  margin: 0 auto;


  .cover img{
    height: 100%;
  }

  .content{
    display: flex;
    flex-direction: column;

    h2{
      font-size: 2.5rem;
      font-family: 'Fredoka One', sans-serif;
      color: white;

      span{
        color: #FF4A57;
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
        color: #FF4A57;

        span{
          color: white;
          margin-right: .5rem;
        }
      }
    }
  }
`
