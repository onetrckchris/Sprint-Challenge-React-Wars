import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import StarWars from './components/StarWars';

const StarwarsContainer = styled.div`
  text-align: center;
`;

const EpicTitle = styled.h1`
  color: black;
  text-shadow: -1px 0 yellow, 0 1px yellow, 1px 0 yellow, 0 -1px yellow;
`;

function App() {
  const [starwarsChars, setStarwarsChars] = useState([]);
  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
      .then(response => setStarwarsChars(response.data.results))
      .catch(error => console.log(error))
  }, [])

  console.log(starwarsChars)

  if(!starwarsChars) return <h1>Loading...</h1>

  return (
    <StarwarsContainer>
      <EpicTitle>React Wars</EpicTitle>
      <StarWars starwarsChars={starwarsChars} />
    </StarwarsContainer>
  )
}

export default App;
