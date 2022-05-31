import styled from "styled-components";

export const Container = styled.section`

  width: 95%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 3rem 0;

`

export const Header = styled.div`

    text-align: center;
    width: 80%;
    max-width: 800px;
    margin: 0 auto;

    h3{
      font-family: 'Fredoka One',sans-serif;
      font-size: 2.4rem;
      color: white;

      span{
        color: #FF4A57;
      }
    }

    p{
      margin-top: 2rem;
      font-size: 1rem;
      font-family: 'Fredoka', sans-serif;
      color: white;
      margin-bottom: 2rem;
    }

`


export const SkillsBody = styled.div`

  width: 95%;
  max-width: 1220px;
  margin: 3rem auto;

  display: grid;
  grid-template-columns: 1fr 1.5fr;

  .cover{
   
      width: 80%;
     
  }


  .skills-bar{
    font-family: 'Fredoka One', sans-serif !important;
    width: 90%;
    margin: auto;
    
    .skills-container {
      
    }
    
  }

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;

    .cover{
      width: 100%; 
    }
  
  }

`