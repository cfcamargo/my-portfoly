import Logo from '../../assets/icons/logo.svg'
import MenuButton from '../../assets/icons/menuMobile.svg'
import CloseIcon from '../../assets/icons/closeIcon.svg'
;
import { NavLink } from '../NavLink';
import { HeaderNav } from './styles';
import { useState } from 'react';



export function Header() {

  const screenWidth = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;
  console.log(screenWidth)

  const [menuIsActive, setMenuIsActive] = useState(false);

  return (
    <HeaderNav>
        <div className="menu">
            <a href="">
              <img src={Logo} alt="Logo Cristian Camargo" />
            </a>
        </div>

        <ul className={menuIsActive ? 'navbar-menu active': 'navbar-menu'}>

          <div className='close-icon' onClick={()=> setMenuIsActive(false)}>
            <img src={CloseIcon} alt="Botao de fechar menu" />
          </div>

          <li><NavLink to="#" title='Home'/></li>
          <li><NavLink to="#about" title='Sobre'/></li>
          <li><NavLink to="#skills" title='Skills'/></li>
          <li><NavLink to="#portfoly" title='Portfolio'/></li>
          <li><NavLink to="#contact" title='Contact'/></li>
        </ul>

        <div className="toogle" onClick={()=>setMenuIsActive(true)}>
          <img src={MenuButton} alt="Botao hamburguer para abrir menu" />
        </div>
    </HeaderNav>
  )
}