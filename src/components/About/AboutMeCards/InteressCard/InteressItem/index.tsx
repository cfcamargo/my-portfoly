import { Content } from "./styles";

interface InteressItemProps {
  icon: string;
  title: string;
}

export function InteressItem({icon, title}: InteressItemProps){

  return (
      <Content>
      <img src={icon} alt={`Icone de ${title}`} />
      <span>{title}</span>
      </Content>
  )

}