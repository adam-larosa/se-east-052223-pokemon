import { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [ pokemonsArray, setPokemonsArray ] = useState( [] )

  const addPokemon = newPokemon => {
    const theNewArray = [ newPokemon, ...pokemonsArray ]
    setPokemonsArray( theNewArray )
  } 

  useEffect( () => {
    fetch( 'http://localhost:3001/pokemon' )
      .then( r => r.json() )
      .then( pokemonsFromFetch => {
        setPokemonsArray( pokemonsFromFetch )
      } )
  }, [] )


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={ addPokemon } />
      <br />
      <Search />
      <br />
      <PokemonCollection pokemons={ pokemonsArray } />
    </Container>
  );
}

export default PokemonPage;
