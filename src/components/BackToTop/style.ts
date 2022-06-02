import styled from "styled-components";

export const Container = styled.button`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .4rem;
  background-color: var(--color-primary);
  border-radius: 50%;

  width: 40px;
  height: 40px;

  position: fixed;
  bottom : -40;
  right: 20;

  border: none;

  transition: bottom .3s ease-in;

  cursor: pointer;

  -webkit-box-shadow: 0px 0px 36px -7px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 36px -7px rgba(0,0,0,0.75);
box-shadow: 0px 0px 36px -7px rgba(0,0,0,0.75);

  img{
    width: 60%;
  }



  &.active{
    bottom: 20;
  }

  &:hover{
    transform: scale(1.1);
    filter: brightness(.9);
  }



`
