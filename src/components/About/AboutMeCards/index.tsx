import { CuriousCard } from "./CuriousCard";
import { InteressCard } from "./InteressCard";
import { Container } from "./styles";

export function AboutMeCards(){
  return (
    <Container>
        <InteressCard />
        <CuriousCard />
    </Container>
  ) 
}