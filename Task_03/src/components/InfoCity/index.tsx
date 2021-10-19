import React from 'react';
import './style.css';

interface InfoCityProps {
  name: string;
  context: {
    like: (data: { cityName: string }) => void;
    unlike: (data: { cityName: string }) => void;
    votes: { name: string; votes: number }[];
  }

}

const InfoCity: React.FC<InfoCityProps> = ({ name, context }: InfoCityProps) => {
  
  const quantityVotes = context.votes.find((city) => city.name === name)?.votes;

  return (
    <div className="info-city-container">
      <h2>{name}</h2>
      <div className="vote-counter">
        <p>{quantityVotes} votes</p>
        <button onClick={(event) => context.like({ cityName: name })}>like</button>
        <button onClick={(event) => context.unlike({ cityName: name })}>unlike</button>
      </div>
    </div>
  );
}

export default InfoCity;