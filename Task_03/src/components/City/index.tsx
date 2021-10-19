import React from 'react';
import InfoCity from '../InfoCity';
import './style.css'

interface CityProps {
  name: string;
  imageUrl: string;
  context: {
    like: (data: { cityName: string }) => void;
    unlike: (data: { cityName: string }) => void;
    votes: { name: string; votes: number }[];
  }
}

const City: React.FC<CityProps> = ({ name, imageUrl, context }: CityProps) => {
  return (
    <div className='city-container'>
      <img src={imageUrl} alt="city"></img>
      <InfoCity name={name} context={context}/>
    </div>
  );
}

export default City;