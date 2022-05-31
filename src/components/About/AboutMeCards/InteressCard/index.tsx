import musicImg from '../../../../assets/icons/headphone.svg'
import gamesImg from '../../../../assets/icons/games.svg'
import basquetImg from '../../../../assets/icons/basquet.svg'
import planeImg from '../../../../assets/icons/plane.svg'


import { InteressItem } from "./InteressItem";
import { CardContent } from './styles';


export function InteressCard(){
  return (
    <CardContent>
        <h4>Hobbies: </h4>
        <div className="interessItems">
          <InteressItem icon={musicImg} title='Música'/>
          <InteressItem icon={gamesImg} title='Games'/>
          <InteressItem icon={basquetImg} title='Basquete'/>
          <InteressItem icon={planeImg} title='Viagem'/>
        </div>
    </CardContent>
  )
}