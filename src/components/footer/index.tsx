import { Container } from './styles'

import logoIcon from '../../assets/icons/iconSimple.svg'
import logo from '../../assets/icons/fullLogo.svg'

export function Footer(){

  const year = new Date()
  const yearAtual = year.getFullYear()

  

  return(
    <>
    <div className="divisor"/>
    <Container>
        <div className="content">
        <div className="footer-description">
          <p>Cristian Camargo - Todos os direitos reservados</p>
          <span>© Copyright {yearAtual}</span>
        </div>
        </div>

        <div className="logo">
        <img src={logo} alt="Logo do cristian Camargo" />
        </div>
    </Container>

    </>
  )
}