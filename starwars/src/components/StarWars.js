import React from 'react';

import StarWarsCharacter from './StarWarsCharacter';

const StarWars = props => {
    console.log(props.starwarsChars)
    return (
        <div className="starwars-container">
            {props.starwarsChars.map(starwarsChar => (
                <StarWarsCharacter key={starwarsChar.created} starwarsChar={starwarsChar} />
            ))}
        </div>
    )
}

export default StarWars;