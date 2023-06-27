import { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addPokemon }) {

  const [ name, setName ] = useState( '' )
  const [ hp, setHp ] = useState( '' )
  const [ front, setFront ] = useState( '' )
  const [ back, setBack ] = useState( '' )


  // One piece of state for all form inputs example:

  // const [ form, setForm ] = useState( {} )
  // const handleChange = e => {
  //   setForm( { ...form, [e.target.name]: e.target.value } )
  // }

  const handleSubmit = e => {
    e.preventDefault()
    const newPokemon = {
      name: name,
      hp: hp,
      sprites: {
        front: front,
        back: back
      }
    }
    addPokemon( newPokemon )
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={ handleSubmit }>
        <Form.Group widths="equal">


          <Form.Input onChange={ e => setName( e.target.value ) } fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={ e => setHp( e.target.value ) } fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            onChange={ e => setFront( e.target.value ) }
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange={ e => setBack( e.target.value ) }
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
