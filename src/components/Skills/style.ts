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


    @media screen and (max-width: 768px){

      h3{
        font-size: 2.8rem;
      }
      p{
        font-size: 1.4rem;
      }
    }

`


export const SkillsBody = styled.div`

  width: 95%;
  max-width: 1220px;
  margin: 3rem auto;

  display: grid;
  grid-template-columns: 1fr 1.5fr;

  .skill-cover{
   
      width: 100%;
      height: auto;
     
  }


  .skills-bar{
    font-family: 'Fredoka One', sans-serif !important;
    width: 90%;
    margin: auto;
    
  }

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    grid-template-rows: 400px 1.2fr;

    .skill-cover{
      width: 100%; 
      height: 90%;
     
    }
  
  }

`