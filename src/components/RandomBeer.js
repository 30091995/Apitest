import React, { useState, useEffect } from 'react'
import axios from 'axios'

const RandomBeer = () =>
{

   const [randomBeer, setRandomBeer] = useState(null);

    useEffect(()=> {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random').then((randomBeer) => {
            setRandomBeer(randomBeer.data)
        })
    },[])

        let content = (
            <div>
            {randomBeer 
                ? <div>
                    <img src={randomBeer.image_url} />
                    <h5>{randomBeer.name} </h5>
                    <p>{randomBeer.tagline}</p>
                    <div>First brewed : {randomBeer.first_brewed}</div>
                    <div>Attenuation level : {randomBeer.attenuation_level}</div>
                    <p>Description : {randomBeer.description}</p>
                    <div>Contributed by : {randomBeer.contributed_by}</div>

                   </div> 
                
                : "loading"}
            </div>
        )
        return content
}

export default RandomBeer