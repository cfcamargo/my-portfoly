import { Content } from "./styles";

interface CuriousItemProps {
  title: string;
  content: string;
}

export function CuriousItem({title, content}: CuriousItemProps){
  return (
    <Content>
      <span>{title}:</span>{content}
    </Content>
  )
}