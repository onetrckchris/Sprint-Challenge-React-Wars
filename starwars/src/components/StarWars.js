import React from 'react';
import styled from 'styled-components';

import StarWarsCharacter from './StarWarsCharacter';

const CharactersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const StarWars = props => {
    return (
        <CharactersContainer>
            {props.starwarsChars.map(starwarsChar => (
                <StarWarsCharacter key={starwarsChar.created} starwarsChar={starwarsChar} />
            ))}
        </CharactersContainer>
    )
}

export default StarWars;