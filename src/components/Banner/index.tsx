import { BannerContainer, ContentBanner } from "./styles";
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/banner.json'
import { SocialLinks } from "../SocialLinks";


export function Banner() {

  const lootieBannerOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };


  return (
    <BannerContainer id="banner">
      <ContentBanner>
        <div className="content">
          <h1>Olá! Eu sou o Cristian Camargo</h1>
      
          <p>Desenvolvedor Front End, apaixonado por tecnologia, e amante de um bom café.</p>
          

          <a href="#portfoly">Meu Portfólio</a>
        </div>

        <div className="cover">
        <Lottie
	        options={lootieBannerOptions}
      />
        </div>
        
      </ContentBanner>
      <SocialLinks />
    </BannerContainer>
  )
}