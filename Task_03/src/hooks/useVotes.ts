import { useState } from 'react';

interface CitiesParams {
  name: string;
  imageUrl: string;
}

function useVotes(cities: CitiesParams[]) {
  const votesByCities = initialState();
  const [votes, setVotes] = useState(votesByCities);


  function initialState() {
    const votesByCities = Object.values(cities).map((city) => ({name: city.name, votes: 0}));
    return votesByCities;
  }

  function like(data: { cityName: string; }) {
    votes.forEach((vote) => {
      if(vote.name === data.cityName)
        vote.votes++;
    })
    setVotes([ ...votes ])
  }

  function unlike(data: { cityName: string; }) {
    votes.forEach((vote) => {
      if(vote.name === data.cityName && (vote.votes - 1) >= 0)
        vote.votes--;
    })
    
    setVotes([ ...votes ]);
  }

  function mostVoted() {
    const cityMostVoted = votes.reduce((prev, next) => {
      return prev.votes > next.votes ? prev : next;
    })

    return cityMostVoted;
  }

  function leastVoted() {
    const cityMostVoted = votes.reduce((prev, next) => {
      return prev.votes < next.votes ? prev : next;
    })

    return cityMostVoted;
  }

  function totalSumVotes() {
    const sum = votes.map((vote) => vote.votes).reduce((prev, next) => prev + next);
    return sum;
  }

  return { votes, like, unlike, mostVoted, leastVoted, totalSumVotes };
}

export default useVotes;