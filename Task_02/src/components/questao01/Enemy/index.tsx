import { FC } from 'react'
import './style.css'

interface IEnemyProps {
  name: string;
  image: string;
  arena?: string;
}

const Enemy: FC<IEnemyProps> = (props) => {
  return (
    <div className='card-base enemy'>
      <img src={ props.image } alt="hero"/>
      <p>Inimigo: { props.name }, lutando na arena { props.arena }</p>
    </div>
  );
}

export default Enemy;