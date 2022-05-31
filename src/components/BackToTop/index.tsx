import { useEffect, useState } from 'react'
import arrowIcon from '../../assets/icons/arrow.svg'
import { Container } from './style'

export function BackToTop() {

  const [backToTopButton, setBackToTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  })


  function handleBackToTop() {
    window.scrollTo(0, 0)
  }

  return (


  
      <Container onClick={handleBackToTop} className={backToTopButton ? 'back-to-top active' : 'back-to-top'}>

        <img src={arrowIcon} alt="Icone de uma flecha apontando pra cima" />

      </Container>
    

  )
}