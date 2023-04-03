import { Monster } from '../../App' 
import Card from '../card/card.tsx';
import './card-list.css';

type CardListProps = {
  monsters: Monster[];
}

const CardList = ({ monsters }: CardListProps) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card key={monster} monster={monster} />;
    })} 
  </div>
);

export default CardList;