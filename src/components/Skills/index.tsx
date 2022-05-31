import { Container, Header, SkillsBody } from "./style";
import SkillBar from 'react-skillbars';
import './bars.scss'

import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/skills2.json'

export function Skills() {

  const lootieSkillsOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    height: 'auto',
  };



  const skills = [
    {type: "HTML", level: 80},
    {type: "CSS", level: 80},
    {type: "Javascript", level: 65},
    {type: "TypeScript", level: 70},
    {type: "React", level: 60},
    {type: "VueJs", level: 40},
    {type: "Node", level: 20},
    {type: "UI/UX", level: 70},
  ];

  const colors = {
    bar: "#1F2235",
    title: {
      text: "#FF4A57",
      background: "#1F2235"
    }
  };


  return (
    <Container id="skills">
      <Header>
        <h3>Minhas <span>Skills</span></h3>
        <p>Tenho me especializado na área de Front End, com foco no React.
          Com base sólida em HTML, CSS e Java Script, posso te ajudar a tirar seu projeto ou site do papel.
          Tenho experiência também com desenvolvimento de interfaces utulizando Figma, Photoshop e Coreldraw
        </p>
      </Header>

      <SkillsBody>

        <div className="skill-cover">
          
           <Lottie 
           options={lootieSkillsOptions}
           
       />
          
        </div>

        <div className="skills-bar">
          <div className="skills-container">
          <SkillBar skills={skills} colors={colors}/>
          </div>
        </div>


      </SkillsBody>


    </Container>
  )
}