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
