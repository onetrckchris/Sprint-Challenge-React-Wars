import React from 'react';
import styled from 'styled-components';

const StarwarsCharCard =  styled.div`
    background-color: black;
    width: 450px;
    padding: 20px;
    border: 1px solid yellow;
    margin: 20px;

    & h1 {
        color: black;
        text-shadow: -1px 0 yellow, 0 1px yellow, 1px 0 yellow, 0 -1px yellow;
    }

    & p {
        color: yellow;
        font-weight: 600;
    }
`;

const StarWarsCharacter = props => {
    return (
        <div>
            <StarwarsCharCard className="starwars-char-card">
                <h1>{props.starwarsChar.name}</h1>
                <p>Birth Year: {props.starwarsChar.birth_year}</p>
                <p>Sex: {props.starwarsChar.gender.toUpperCase()}</p>
                <p>Hair Color: {props.starwarsChar.hair_color.toUpperCase()}</p>
                <p>Height: {props.starwarsChar.height}cm</p>
            </StarwarsCharCard>
        </div>
    )
}

export default StarWarsCharacter;