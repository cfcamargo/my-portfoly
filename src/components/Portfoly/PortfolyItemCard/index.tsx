import { Container } from "./styles";

import htmlIcon from '../../../assets/icons/html5Icon.svg'
import cssIcon from '../../../assets/icons/cssIcon.svg'
import gitIcon from '../../../assets/icons/gitIcon.svg'
import jsIcon from '../../../assets/icons/jsIcon.svg'
import styledcIcon from '../../../assets/icons/styledcIcon.svg'
import reactIcon from '../../../assets/icons/reactIcon.svg'
import tailwindIcon from '../../../assets/icons/tailwindIcon.svg'
import tsIcon from '../../../assets/icons/tsIcon.svg'

interface PortfolyItemCardProps {
  project: {
    cover: string
    title: string
    description: string
    tecnologias: string[]
  }
}


export function PortfolyItemCard({ project }: PortfolyItemCardProps) {


  const tecnologIcons = {
    html: htmlIcon,
    css: cssIcon,
    git: gitIcon,
    js: jsIcon,
    styledC: styledcIcon,
    react: reactIcon,
    tailwind: tailwindIcon,
    ts: tsIcon
  } as any

  const tecnologiasUsed = project.tecnologias



  return (
    <Container>
      <div className="cover">
        <img src={project.cover} alt="Screenshot do site {title}" />
      </div>

      <div className="content">
        <div className="project-description">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>

        <div className="project-tecnologys">
          <h4>Tecnologias Utilizadas</h4>
          <div className="tecnologys-icons">
          {
            tecnologiasUsed.map((tecnologia, index) => (
              <div key={index}>
                <img src={tecnologIcons[tecnologia] as string} alt={`Icone do ${tecnologia}`} />
              </div>
            ))
          }
          </div>
        </div>


      </div>
    </Container>
  )
}