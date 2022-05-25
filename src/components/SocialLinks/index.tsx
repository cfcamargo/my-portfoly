import gitHubIcon from '../../assets/icons/github.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import instagramIcon from '../../assets/icons/instagram.svg'

import { SocialLinkItem } from "./SocialLinkItem";
import { SocialLinksWrapper } from "./styles";

export function SocialLinks(){
  return (
   <SocialLinksWrapper>
     <SocialLinkItem to='https://github.com/cfcamargo' icon={gitHubIcon}/>
     <SocialLinkItem to='https://www.linkedin.com/in/cristian-camargo-4504291b4' icon={linkedinIcon}/>
     <SocialLinkItem to='https://instagram.com/sr.fcamargo' icon={instagramIcon}/>
   </SocialLinksWrapper>
  )
}