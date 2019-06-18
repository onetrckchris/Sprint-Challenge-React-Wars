import React from 'react';
import './StarWars.css';

const StarWarsCharacter = props => {
    return (
        <div>
            <div className="starwars-char-card">
                <h1>{props.starwarsChar.name}</h1>
                <p>Birth Year: {props.starwarsChar.birth_year}</p>
                <p>Sex: {props.starwarsChar.gender.toUpperCase()}</p>
                <p>Hair Color: {props.starwarsChar.hair_color.toUpperCase()}</p>
                <p>Height: {props.starwarsChar.height}cm</p>
            </div>
            {/* <div className="empty-space"></div> */}
        </div>
    )
}

export default StarWarsCharacter;