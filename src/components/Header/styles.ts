import styled from 'styled-components';

export const HeaderNav = styled.nav`

    width: 95%;
    max-width: 1220px;
    margin: 0 auto;
    height: 9vh;
    padding: 1rem 0;

    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-content: space-between;
    align-items: center;
    
  .toogle {
    display: none;
  }

  .navbar-menu-brand{
    img{
      height: 90%;
    }
  }

  .navbar-menu{
    list-style: none;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 2rem;

    transition: all .3s ease;


    .close-icon{
    display: none
    }

  

  }

  @media screen and (max-width: 768px){
    

    .navbar-menu{
      transform: translateY(100%);
      display:flex; 
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4rem;
      z-index: 9999999999;



      width: 100%;
      height: 100vh;


      list-style: none;

      transition: .5s ease-in;

      position: fixed;
      top: 0;
      left: 0;

      background: linear-gradient(168.28deg, rgba(31, 34, 53, 0.96) 26.95%, rgba(255, 74, 87, 0.96) 99.52%);

      li{
        opacity: 0;
      }

      &.active{
      transform: translateY(0%);
      visibility: visible;
      
      
      
      
      li{
        opacity: 1;
      }

      .close-icon{
        display: block;
        position: absolute;
        top: 1rem;
        right: 1rem;

      cursor: pointer;
      }



      } 

    }

    .toogle {
      display: flex;
      justify-content: flex-end;

      cursor: pointer;


    }

  }


`