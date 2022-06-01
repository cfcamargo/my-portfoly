import styled from "styled-components";

export const BannerContainer = styled.section`

    width: 100%;
    height: calc(100vh - 9vh);
    background-color: var(--color-dark-blue);
    border-bottom: 2px solid var(--color-primary);

`

export const ContentBanner = styled.div`

  
  width: 95%;
  max-width: 1220px;
  height: 80vh;
  

  margin: 0 auto;

  

  display: grid;
  grid-template-columns: 1fr 1fr;

  justify-content: center;
  align-items: center;

  .content{
    width: 80%;
    
    h1{
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
    justify-content: center;
    align-items: center;
  }


    @media screen and (max-width: 768px){

      grid-template-columns: 1fr;
      grid-template-rows: 1fr 400px ;
      justify-content: center;
      align-items: center;
      align-content: center;

     
      .content{
          width: 100%;
          display: grid;
          gap:2rem;
          
          h1{
            margin-top: 4rem;
            font-size: 2.5rem;
            text-align: center;
            
          }

          p{
            
            font-size: 2rem;
            margin: 0 auto;
            
            text-align: center;
            width: 90%;
          }

          a{
            padding: .8rem 3rem;
            border: 2px solid #FF4A57;
            border-radius: 5px;
            transition: .3s ease-in;
            margin: 0 auto;

            &:hover{
              background-color: #FF4A57;
              color: white;
            }

          }

         
   }

    .cover{
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        width: 100%;
        height:70%;
        padding: 0 !important;
    }


}

`
