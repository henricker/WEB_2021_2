import './style.css';
import City from "../../components/City";
import { cities } from "../../constants/City";
import { useContext } from 'react';
import CitiesRegister from '../../context/citiesRegister';
import useVotes from '../../hooks/useVotes';

function Home() {
  const citiesContext = useContext(CitiesRegister);
  const { like, unlike, votes, leastVoted, mostVoted, totalSumVotes  } = useVotes(citiesContext);
  const mostVotedCity = mostVoted();
  const leastVotedCity = leastVoted();
  const totaSumOfVotes = totalSumVotes();
  return (
    <div className='home-container'>
      <div className="cities-container">
          {Object.values(cities).map((city) => <City name={city.name} imageUrl={city.imageUrl} key={city.name} context={{ like, unlike, votes}} />)}
      </div>
      <div className='result-votes'>
        <p>Most voted = {mostVotedCity.name}, {mostVotedCity.votes} votes</p>
        <p>least voted = {leastVotedCity.name}, {leastVotedCity.votes} votes</p>
        <p>total sum of votes = {totaSumOfVotes} votes</p>
      </div>
    </div>
  );
}

export default Home;