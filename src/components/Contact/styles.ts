import styled from "styled-components";

export const Container = styled.section`

        width: 95%;
        max-width: 1220px;
        margin: 0 auto;
        
        padding: 5rem 0;

        display: grid;
        gap: 2rem;

        .contact-header{
            width: 80%;
            max-width: 700px;
            text-align: center;
            margin: 0 auto;

            h3{
              font-size: 2rem;
              font-family: 'Fredoka One', sans-serif;
              color: white;
              margin-bottom: 1rem;
              span{
                color: var(--color-primary);
              }
            }

            p{
              font-size: 1rem;
              font-family: 'Fredoka', sans-serif;
              color: var(--color-primary);
            }

        }

        .contact-form{
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            max-width: 600px;

            gap: 1rem;

            .input-area{
              display: flex;
              gap: .5rem;
              height: 60px;
              justify-content: center;
              align-items: center;
              font-family: 'Fredoka', sans-serif;
              font-size: 1rem;

              padding: 1rem .8rem;

              color: var(--color-primary);

              background-color: var(--color-dark-blue);

              

              input{
              
              width: 100%;
              background-color: transparent;
              border: none;
              outline: none;

              color: white;
              font-size: 1rem;
            }
            }

            .input-text-area{

              
              width: 100%;
              height: 300px;

              display: flex;
              flex-direction: column;

              color: var(--color-primary);

              font-family: 'Fredoka', sans-serif;
              background-color: var(--color-dark-blue);

              padding: 1rem .8rem;

              textarea {
                  width: 100%;
                  height: 100%;

                  outline: none;
                  background: transparent;
                  border: none;

                  font-size: 1rem;
                  font-family: 'Fredoka', sans-serif;
                  

                  resize: none;

                  color: white;

                  
                }


              h4{
                margin-bottom: 1rem;
              }

             

             
            }

            button{
              width: 140px;
              height: 40px;

              background-color: transparent;

              border: 1px solid var(--color-primary);
              color: var(--color-primary);

              cursor: pointer;

              transition: .3s ease-in;

              margin-left: auto;

              &:hover{
                background-color: var(--color-primary);
                color: white;
                
              }
            }

          
           

           
          }
        }


    @media screen and (max-width: 768px){

      .contact-header{
            h3{
              font-size: 2.5rem;
            }

            p{
              font-size: 1.4rem;
            }
        }

        .contact-form{
          form{
            .input-area{ 
              font-size: 1.4rem;

                input{
                  font-size: 1.4rem;
                }
            }

            .input-text-area{

              font-size: 1.4rem;
                textarea {
                    font-size: 1.4rem;
                  }
                h4{
                  margin-bottom: 1rem;
                }
            }    
          }
        }

    }
        

`

export const ContactLinks = styled.div`
    display: flex;
    justify-content: space-between;

    align-items: center;

    margin: 0 auto;

    width: 95%;
    max-width: 600px;

    padding-bottom: 4rem;


    a{
      display: flex;
      align-items: center;
      gap: .5rem;
      transition: .3s ease-in;

      &:hover{
        filter: brightness(.9);
        transform: scale(1.1);
      }
    }


    .social-icons-links{
      display: flex;
      gap: 1rem;

      a{
        transition: .3s ease-in;
      }

      a{
        &:hover{
          filter: brightness(.9);
          transform: scale(1.1);
        }
      }
    }
    
    @media (max-width: 768px){
      display: grid;
      text-align: center;

      gap: 1rem;
     
      justify-content: center;


      .email-link{
        font-size: 1.4rem;
        margin-bottom: 2rem;
      }

      .social-icons-links{
        margin: 0 auto;
      }
    }

`