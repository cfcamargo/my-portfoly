import styled from "styled-components";

export const Container = styled.footer`



  width: 100%;
  max-width: 1220px;
  padding: 3rem 1rem;
  

  margin: 2rem auto 0 auto;

  display: flex;
  justify-content: space-between;


  .content{
    display: flex;
    align-items: center;
    justify-content:flex-start;
  }

  .footer-description{
    p{
    color: white;
    font-family: 'Fredoka', sans-serif; 
    font-size: .7rem;

    img{
      width: 30px;
    }
  }

  span{
    color: var(--color-primary);
    font-family: 'Fredoka', sans-serif;
    font-size: .7rem;
  }
  }

 

  img{
    width: 150px;
  }


  @media screen and (max-width:768px){
       display: grid;
       justify-content: center;
       align-items: center;
       gap: 2rem;

      .content{
        text-align: center;
        justify-content: center;
        align-items: center;

       .footer-description{
        
         p{
           font-size: 1.5rem;
         }
         span{
           font-size: 1rem;
          
           margin: 0 auto;
         }
       }

      }

      .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          margin: 0 auto;
        }
      }

  }


`