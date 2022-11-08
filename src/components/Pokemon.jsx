import React from "react";

const Pokemon = () => {

    const makeAPICall = () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => response.json())
            .then(data => {

                const {count, next, previous, results} = data
                console.log(count)
                console.log(next)
                console.log(previous)
                console.log(results)
            })
    }
    return (

        <fieldset>
            <legend>Pokemon.jsx</legend>
            <button onClick={ makeAPICall }>Get Pokemon</button>
        </fieldset>
    )
}

export default Pokemon