import { useEffect, useState } from "react"
import Country from "../country/Country"
import "./Countries.css"

export default function Countries(){
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountries = (country) =>{
        // console.log(country)
        // console.log('add this to your visited country')
        const newVisitedCountry = [...visitedCountries , country]
        setVisitedCountries(newVisitedCountry)

    }

    return(
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3} handleVisitedCountries={handleVisitedCountries} country={country}></Country>)
                }
            </div>
        </div>
    )
}