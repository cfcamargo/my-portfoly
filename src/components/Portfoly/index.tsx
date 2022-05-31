import { PortfolyItemCard } from "./PortfolyItemCard";
import { Container, PortfolyBody, PortfolyHeader } from "./styles";

import fidgetCoverImg from '../../assets/images/fidgetCover.svg'
import geofarmCoverImg from '../../assets/images/geofarmCover.png'
import geoterraCoverImg from '../../assets/images/geoterraCover.png'
import idealCoverImg from '../../assets/images/idealCover.png'
import beautySalonCoverImg from '../../assets/images/beautysalonCover.png'
import portfolyCoverImg from '../../assets/images/portfolyCover.svg'


export function Portfoly() {

  const projects = [
    {
      cover: fidgetCoverImg,
      title: 'Fidget - NLW Return',
      description: 'Este projeto foi desenvolvido durante a NLW Return da Rocketseat, Projeto consiste em um widget para reporte de erros em uma aplicação, com função de captura de tela, para enviar junto ao comentário',
      tecnologias: ['html', 'css', 'js', 'ts', 'react', 'tailwind', 'git'],
      repo: 'https://github.com/cfcamargo/Feedget-nlwReturn', 
      to : 'https://feedget-nlw-return-lovat.vercel.app/'
    },
    {
      cover: geofarmCoverImg,
      title: 'Geofarm Agricultura Web Site',
      description: 'Este foi meu primeiro projeto como freelancer, Onde pude aprender muito e entregar um ótimo resultado. O objetivo deste projeto, foi desenvolver uma página de apresentação da empresa, onde os clientes pudessem encontrar os serviços que a empresa oferece, e saber um pouco mais sobre a empresa.',
      tecnologias: ['html', 'css', 'js', 'git'],
      to: 'https://www.geofarmagro.com.br',
      repo : 'https://github.com/cfcamargo/Geofarm-agro'
    },
    {
      cover: idealCoverImg,
      title: 'Ideal Tecnologia Agrícola Web Site',
      description: 'O objetivo deste projeto, foi desenvolver uma página de apresentação da empresa, onde os clientes pudessem encontrar os serviços que a empresa oferece, Nesse projeto pude conhecer a biblioteca UIKit para agilizar o processo de criação, A UIkit oferece componentes prontos, e simples de usar.',
      tecnologias: ['html', 'css', 'js', 'git'],
      to : 'https://idealtecnologiaagricola.com/',
      repo : 'https://github.com/cfcamargo/ideal-website'
    },
    {
      cover: geoterraCoverImg,
      title: 'Geoterra Agricultura',
      description: 'Este projeto foi para uma empresa empresa de agricultura, onde pude utilizar Sliders com bibliotecas prontas, O objetivo era criar uma landing page de apresentação para a empresa, mostrando todos os serviços, e como contratar estes serviços. ',
      tecnologias: ['html', 'css', 'js', 'git'],
      repo: 'https://github.com/cfcamargo/Geoterra-Py-e-Outros',
      to : 'https://geoterra-py-e-outros.vercel.app/'
    },
    {
      cover: beautySalonCoverImg,
      title: 'BeuatySalon Landing Page',
      description: 'Este projeto foi realizado durante a NLW Togueter da Rocketseat, o projeto consiste em uma página de um salão de beleza. Pra mim foi muito interessante, pois aprendi alguns conceitos legais, principalmente de acessibilidade, e aprendi a usar bibliotecas de ícones, e até a criar essas bibliotecas usando o IconMon ',
      tecnologias: ['html', 'css', 'js', 'git'],
      repo: 'https://github.com/cfcamargo/nlwtogueter-missionorigin',
      to: 'https://nlwtogueter-missionorigin.vercel.app/'

    },
    {
      cover: portfolyCoverImg,
      title: 'Meu Portfolio',
      description: 'Deixo esse projeto aqui, como meu primeiro projeto profissional, utilizando React com TypeScript, Utilizando todos os conceitos que aprendi ate aqui de React, como props, iteraçao em listas, styled components, e tipagem para o projeto. ',
      tecnologias: ['html', 'css', 'js', 'git', 'react', 'ts', 'styledC'],
      repo: 'https://github.com/cfcamargo/my-portfoly',
      to: ''
    },


  ]



  return (
    <div className="bg" id="portfoly">
    <Container>
      <PortfolyHeader >
        <h3>Meu <span>Portfólio</span></h3>

        <p>Aqui deixo alguns de meus últimos projetos, Projetos maiores e alguns freelancers. Deixo também em cada projeto as tecnologias que usei,
          e os links para acesso ao Projeto online, e também acesso ao repositório do projeto. 
        </p>
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