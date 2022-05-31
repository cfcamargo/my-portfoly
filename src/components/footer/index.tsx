import { Container } from "./styles"
import logoIcon from '../../assets/icons/iconSimple.svg'
import logo from '../../assets/icons/fullLogo.svg'

export function Footer(){

  const year = new Date()
  const yearAtual = year.getFullYear()

  

  return(
    <Container>
        <div className="footer-description">
          <p><img src={logoIcon} alt="" />Cristian Camargo - Todos os direitos reservados</p>
          <span>© Copyright {yearAtual}</span>
        </div>
        
        <img src={logo} alt="Logo do cristian Camargo" />
    </Container>
  )
}