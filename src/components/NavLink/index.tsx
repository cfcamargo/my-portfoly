import './navlink.scss'

interface NavLinkProps{
  to: string,
  title: string,
}

export function NavLink({to, title} : NavLinkProps){
  return (
    <a href={to}>{title}</a>
  )
}