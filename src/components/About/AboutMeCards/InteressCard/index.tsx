import musicImg from '../../../../assets/icons/headphone.svg'
import { InteressItem } from "./InteressItem";
import { CardContent } from './styles';


export function InteressCard(){
  return (
    <CardContent>
        <h4>Interesses</h4>
        <div className="interessItems">
          <InteressItem icon={musicImg} title='Música'/>
          <InteressItem icon={musicImg} title='Música'/>
          <InteressItem icon={musicImg} title='Música'/>
          <InteressItem icon={musicImg} title='Música'/>
        </div>
    </CardContent>
  )
}