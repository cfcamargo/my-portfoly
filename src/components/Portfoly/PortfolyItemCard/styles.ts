import { Header } from './../../Skills/style';
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

    position: relative;


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
          font-size: 2.3rem;
          color: var(--color-primary);
          font-family: 'Fredoka One', sans-serif;
        }

        p{
          color: white;
          font-family: 'Fredoka', sans-serif;
          font-size: 1.4rem;
        }
      }

      .project-tecnologys{
        h4{
          color: var(--color-primary);
          margin-top: 2rem;
          font-size: 1.8rem;
          font-family: 'Fredoka', sans-serif;
        }

        .tecnologys-icons{
          display: flex;
          gap: .5rem;
          margin-top: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          align-items: center;
        }
      }


      .buttons-links{
        padding: 2rem 0;
        display: grid;
        gap: 2rem;
        



        .LinkRepoButton{
          border: 1px solid var(--color-primary);
          width: 100%;
          height: 50px;
          display: grid;
          font-size: 1.4rem;

          justify-content: center;
          align-items: center;
          color: var(--color-primary);

          transition: all .3s ease-in;

          &:hover{
            background-color: var(--color-primary);
            color: white;
          }

        }
      }




    }

    @media screen and (min-width: 768px){

      .content{
      padding: 2rem 3rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
     

      .project-description{
      
        h3{
          font-size: 1.3rem;
         
        }

        p{
          
          font-size: 1rem;
        }
      }

      .project-tecnologys{
        h4{
         
          font-size: 1.2rem;
          
        }

       
  

        .LinkRepoButton{
          
          font-size: 1rem;

      
        }
      }




    }

      .buttons-links{
        width: 100%;
        height: 0;
        background-color: var(--color-bg-blue);
        opacity: .98;
        position: absolute;

       
        bottom: 0;
        left: 0;

        padding: 2rem 4rem;


        transition: height .3s ease-in;

        display: none;

        justify-content: center;
        align-items: center;
        align-content: center;
        gap : 1rem;
      
    

        

        .LinkRepoButton{
          border: 1px solid var(--color-primary);
          padding: .7rem 2rem;
          width: 200px;
          background-color: none;

          display: none;
          justify-content: center;
          align-items: center;

          color: var(--color-primary);
          
          opacity: 0;

          transition: .3s background-color ease-in;
        

          cursor: pointer;

          &:hover{
            background-color: var(--color-primary);
            color: white;
            opacity: 1;
          }
          
        }


      }
    }

    &:hover{


      .buttons-links{
        height: 100%;
      

        .LinkRepoButton{
          opacity: 1;
        }
      
      }
      
    }
    

  

`