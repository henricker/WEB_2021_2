import { FC } from 'react'
import './style.css'

interface IHeroProps {
  name: string;
  image: string;
  arena?: string;
}

const Hero: FC<IHeroProps> = (props) => {
  return (
    <div className='card-base hero'>
      <img src={ props.image } alt="hero"/>
      <p>Herói: { props.name }, lutando na arena { props.arena }</p>
    </div>
  );
}

export default Hero;