import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons }) {

  

  /* -> what we're doing with .map
      pokemons = [ {},{},{},{} ]
      pokemonComponents = [ <PokemonCard />, <PokemonCard />, <PokemonCard /> ]
  */

  const pokemonComponents = pokemons.map( pokemonObject => {
    return <PokemonCard key={ pokemonObject.id } pokemon={ pokemonObject }/>
  } )


  return (
    <Card.Group itemsPerRow={6}>
      { pokemonComponents }
    </Card.Group>
  );
}

export default PokemonCollection;
