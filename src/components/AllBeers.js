import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import axios from 'axios'
import Beer from './Beer'

const AllBeers = () => {
    const [allBeers, setAllBeers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers').then((beers) => {
            setAllBeers(beers.data)
        })
    }, [])


    const onChangeHandler = (event) => {
        setSearchTerm(event.target.value)
    }

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/search?q=' + searchTerm).then((beers) => {
            setAllBeers(beers.data)
        })
    }, [searchTerm])

    let content = (
        <div>
            {AllBeers}
            <h3>Search Beer</h3>
            <input type="text" name="searchTerm" value={searchTerm} onChange={onChangeHandler} />
            {allBeers.length > 0
                ? allBeers.map((singleBeer) => <Link to={"/" + singleBeer._id} key={singleBeer._id}> <Beer singleBeer={singleBeer} /> </Link>)
                : "Loading"}
        </div>
    )

    return content
}

export default AllBeers