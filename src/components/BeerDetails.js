import React, { useState, useEffect } from 'react'
import axios from 'axios'

const BeerDetails = (props) => {


    const [beer, setBeer] = useState(null);


    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/' + props.match.params.id).then((singleBeer) => {
            console.log(singleBeer.data)
            setBeer(singleBeer.data)
        })
    }, [])



    let content = (<div>
        {beer
            ? <div>
                <img src={beer.image_url} />
                <h5>{beer.name} </h5>
                <p>{beer.tagline}</p>
                <div>First brewed : {beer.first_brewed}</div>
                <div>Attenuation level : {beer.attenuation_level}</div>
                <p>Description : {beer.description}</p>
                <div>Contributed by : {beer.contributed_by}</div>

            </div>

            : "loading"}
    </div>
    )
    return content;


}

export default BeerDetails