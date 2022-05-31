import { CuriousItem } from "./CuriousItem/intex";
import { Container } from "./styles";

export function CuriousCard(){
  return (
    <Container>
        <h4>Curiosidades:</h4>

        <div className="content">
          <CuriousItem title="Música Favorita" content="Manifesto - Vintage Culture"/>
          <CuriousItem title="Bebidas" content="Café, Cerveja e Vinho"/>
          <CuriousItem title="Generos Musicais" content="Sertanejo, Blues e Lofi"/>
          <CuriousItem title="Comida" content="Churrasco"/>
          <CuriousItem title="Jogo Favorito" content="Super Mário Odissey"/>
          <CuriousItem title="Time do Coração" content="Palmeiras"/>
        </div>

    </Container>
  )
}