import { useState } from 'react'
import './Country.css'

export default function Country({country, handleVisitedCountries}){
    console.log(country)
    const {name, flags, capital, area, population, cca3} = country

    const [Visited, setVisited] = useState(false)
    // const handleClick =()=>{
    //     setVisited(true)
    // }
    // othoba toggle korar jonno
    const handleClick =()=>{
        setVisited(!Visited)
    }
    // console.log(handleVisitedCountries)

    /** ek button er doi button er kaj hosse */
    // const combine =()=>{
    //     handleClick();
    //     handleVisitedCountries(country)
    // }

    return(
        <div className={`country ${Visited ? 'visited':'not-visited'}`}>
            <h3 style={{color: Visited? 'purple':'white'}}>Name: {name.common}</h3>
            <img className='countryImage' src={flags.png} alt="" />
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p>Code: {cca3}</p>
            <button onClick={()=>handleVisitedCountries(country)}>Mark Visited</button>
            <br />
            <button onClick={handleClick}>{Visited ? 'Visited':'going'}</button>
            {/* ek button er doi button er kaj hosse */}
            {/* <button onClick={combine}>{Visited ? 'Visited':'going'}</button> */}
            {Visited ? ' I have Visited' : ' I want to go'}
        </div>
    )
}