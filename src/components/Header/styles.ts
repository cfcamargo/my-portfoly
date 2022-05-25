import styled from 'styled-components';

export const HeaderNav = styled.nav`

    width: 95%;
    max-width: 1220px;
    margin: 0 auto;
    height: 8vh;

    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-content: space-between;
    align-items: center;
    
  .toogle {
    display: none;
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
      display:flex; 
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4rem;

      transform: translateY(100%);

      width: 100%;
      height: 100vh;

      list-style: none;

      transition: .3s ease-in;

      position: fixed;
      top: 0;
      left: 0;

            
      background: linear-gradient(168.28deg, rgba(31, 34, 53, 0.96) 26.95%, rgba(255, 74, 87, 0.96) 99.52%);

      &.active{
        transform: translateY(0%);
            


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