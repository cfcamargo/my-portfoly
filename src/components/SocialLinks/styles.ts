import styled  from 'styled-components';


export const SocialLinksWrapper = styled.div`
    margin: 0 auto;
    height: 12vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-bottom: 2rem;
   
    a{
        transition: .3s ease-in;

        &:hover{
            filter: brightness(.8);
            transform: scale(1.2);
        }
    }

`