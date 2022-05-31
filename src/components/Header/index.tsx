import Logo from '../../assets/icons/logo.svg'
import MenuButton from '../../assets/icons/menuMobile.svg'
import CloseIcon from '../../assets/icons/closeIcon.svg'
;
import { NavLink } from '../NavLink';
import { HeaderNav } from './styles';
import { useState } from 'react';



export function Header() {

  const [menuIsActive, setMenuIsActive] = useState(false);

  return (
    <HeaderNav id='header'>
        <div className="navbar-menu-brand">
            <a href="#">
              <img src={Logo} alt="Logo Cristian Camargo" />
            </a>
        </div>

        <ul className={menuIsActive ? 'navbar-menu active': 'navbar-menu'}>

          <div className='close-icon' onClick={()=> setMenuIsActive(false)}>
            <img src={CloseIcon} alt="Botao de fechar menu" />
          </div>

          <li onClick={()=> setMenuIsActive(false)}><NavLink to="#" title='Home'/></li>
          <li onClick={()=> setMenuIsActive(false)}><NavLink to="#about" title='Sobre'/></li>
          <li onClick={()=> setMenuIsActive(false)}><NavLink to="#skills" title='Skills'/></li>
          <li onClick={()=> setMenuIsActive(false)}><NavLink to="#portfoly" title='Portfólio'/></li>
          <li onClick={()=> setMenuIsActive(false)}><NavLink to="#contact" title='Contato'/></li>
        </ul>

        <div className="toogle" >
          <img src={MenuButton} alt="Botao hamburguer para abrir menu" onClick={()=>setMenuIsActive(true)}/>
        </div>
    </HeaderNav>
  )
}