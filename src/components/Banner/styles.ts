import styled from "styled-components";

export const BannerContainer = styled.section`

    width: 100%;
    height: calc(100vh - 8vh);
    background-color: #24263B;
  

`

export const ContentBanner = styled.div`

  
  width: 95%;
  max-width: 1220px;
  height: 100%;

  margin: 0 auto;

  

  display: grid;
  grid-template-columns: 1fr 1fr;

  justify-content: center;
  align-items: center;

  .content{
    width: 70%;
    
    h2{
      font: 3rem 'Fredoka One', sans-serif;
      color: white;
      
    }

    p{
      margin-top: 1rem;
      color: white;
      font-family: 'Fredoka', sans-serif;
      font-size: 1.2rem;
      margin-bottom: 3rem;
    }

    a{
      padding: .7rem 3rem;
      border: 2px solid #FF4A57;
      border-radius: 5px;
      transition: .3s ease-in;

      &:hover{
        background-color: #FF4A57;
        color: white;
      }

    }

  }

  .cover{
    display: flex;
    justify-content: flex-end;
  }

  

`

