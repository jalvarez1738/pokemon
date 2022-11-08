import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const AxiosPokemon = () => {

    const [pokeList, setPokeList] = useState([])


    const makeAPICall = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(res => {
                const { results } = res.data
                setPokeList(results)
            })
            .catch(error => console.log(error))
            
    }
        
    return (
        <fieldset>
        <legend>AxiosPokemon.jsx</legend>
        <button onClick={ makeAPICall }>Get Pokemon</button>
        {
            pokeList.map((poke) => <p>{poke.name}</p>)
        }
        </fieldset>
    )
}

export default AxiosPokemon