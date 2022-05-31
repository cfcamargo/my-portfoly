import { Container } from "./styles";
import meImg from '../../assets/images/me.svg';
import { AboutMeCards } from "./AboutMeCards";

export function About() {
  return (
    <>
      <section id="about">
        <Container>
          <div className="cover">
            {/* <img src={meImg} alt="" /> */}
          </div>


          <div className="content">
            <h2>Sobre <span>Mim</span></h2>

            <p>Construindo sites e resolvendo bugs desde 2020,  hoje atuo na área de
              desenvolvimento Front End, e posso te ajudar com seu projeto.
              Sou apaixonado por tecnologia, e desde meus 14 anos atuo na área de TI.
              Iniciei na área de manutenção e montagem de computadores em uma loja de informática da minha cidade.
              Meu primeiro contato com programação foi no ensino médio onde realizei um curso técnico no Instituto Federal de Mato Grosso do Sul, onde pude conhecer HTML, CSS E Javascript.
              Atualmente estou em constante aprendizado buscando sempre melhorar
              minhas habilidades com tais tecnologias.
              No momento estou estudando Ract JS e tenho ampliado
              meus conhecimentos e melhorado meus projetos utilizando essa tecnologia fantástica, e com muito entusiasmo estou sempre buscando inovar e aprender.</p>

            <ul>
              <li>
                <span>Nome:</span> Cristian Camargo
              </li>
              <li>
                <span>Idade:</span> 26 anos
              </li>
              <li>
                <span>Cidade:</span> Ponta Porã - MS
              </li>
            </ul>

            <AboutMeCards />

              
          </div>



        </Container>
      </section>
    </>
  )
}