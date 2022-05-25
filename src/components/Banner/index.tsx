import { BannerContainer, ContentBanner } from "./styles";
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/banner.json'
import Typing from "react-typing-animation";
import { SocialLinks } from "../SocialLinks";


export function Banner() {

  const lootieBannerOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  return (
    <BannerContainer>
      <ContentBanner>
        <div className="content">
          <h2>Olá! Eu sou o Cristian Camargo</h2>
      
      <Typing loop='true'>
          <p>Desenvolvedor front end, apaixonado por tecnologia, e amante de um bom café.</p>
          <Typing.Backspace count={90} delay={3000}/>
      </Typing>

          <a href="#portfoly">Meu Portfolio</a>
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