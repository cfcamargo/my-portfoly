interface SocialLinkItemProps{
  to: string,
  icon: string,
}

export function SocialLinkItem({to, icon}: SocialLinkItemProps){
  return (
    <a href={to} target="_blank">
      <img src={icon} alt="{`Icone do ${icon}`}" />
    </a>
  )
} 