import { PortfolyItemCard } from "./PortfolyItemCard";
import { Container, PortfolyBody, PortfolyHeader } from "./styles";

import fidgetCoverImg from '../../assets/images/fidgetCover.svg'
import geofarmCoverImg from '../../assets/images/geofarmCover.svg'
import geoterraCoverImg from '../../assets/images/geoterraCover.svg'
import idealCoverImg from '../../assets/images/idealCover.svg'


export function Portfoly() {

  const projects = [
    {
      cover: fidgetCoverImg,
      title: 'Fidget - NLW Return',
      description: 'Este projeto foi desenvolvido durante a NLW Return da Rocketseat, Projeto consiste em um widget para reporte de erros em uma aplicação, com função de captura de tela, para enviar junto ao comentário',
      tecnologias: ['html', 'css', 'js', 'ts', 'react', 'tailwind', 'git']
    },
    {
      cover: geofarmCoverImg,
      title: 'Geofarm Agricultura Web Site',
      description: 'Este foi meu primeiro projeto como freelancer, Onde pude aprender muito e entregar um ótimo resultado. O objetivo deste projeto, foi desenvolver uma página de apresentação da empresa, onde os clientes pudessem encontrar os serviços que a empresa oferece, e saber um pouco mais sobre a empresa.',
      tecnologias: ['html', 'css', 'js', 'git']
    },
    {
      cover: idealCoverImg,
      title: 'Ideal Tecnologia Agrícola Web Site',
      description: 'O objetivo deste projeto, foi desenvolver uma página de apresentação da empresa, onde os clientes pudessem encontrar os serviços que a empresa oferece, Nesse projeto pude conhecer a biblioteca UIKit para agilizar o processo de criação, A UIkit oferece componentes prontos, e simples de usar.',
      tecnologias: ['html', 'css', 'js', 'git']
    },
    {
      cover: geoterraCoverImg,
      title: 'Geoterra Agricultura',
      description: 'Este projeto foi para uma empresa empresa de agricultura, onde pude utilizar Sliders, com bibliotecas prontas, O objetivo era criar uma landing page de apresentação para a empresa, mostrando todos os serviços, e como contratar estes serviços. ',
      tecnologias: ['html', 'css', 'js', 'git']
    },


  ]



  return (
    <div className="bg">
    <Container>
      <PortfolyHeader id="portfoly">
        <h3>Meu <span>Portfólio</span></h3>
      </PortfolyHeader>

      <PortfolyBody>
        <div className="contentBody">
        {
          projects.map((project, index) => (
            <PortfolyItemCard key={index} project={project} />
          )
          )
        }
        </div>
      </PortfolyBody>
    </Container>

    </div>
  )


}