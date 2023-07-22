
import './Card.css';
import { CardContent } from './CardContent';

const title = 'pizza'
const price = 'price'
const duration = 'duration'

export const Card = ({ isCardHovered }) => {
    return (
      <div className={'card-conteiner'}>
        <p className={'card-title'}> hello </p>
        <CardContent  title={title} price={price} duration={duration} />
      </div>
    );
  };