import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'

  const Countries = () => {
  const [countries, setCountries]=useState([])
  const [visitedCountry, setVisitedCountry] = useState([])
  const [visitedFlag, setVisitedFlag] = useState([])
  const [visitedCapital, setVisitedCapital] = useState([])

  // fetch by API
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data=>setCountries(data))
  },[])

  // function by country
    const handleVisitedCountry = country =>{
    const newVisitedCountry = [...visitedCountry, country]
    setVisitedCountry(newVisitedCountry)
  }

  // function by capital
  const handleVisitedCapital = capital =>{
    const newVisitedCapital = [...visitedCapital, capital]
    setVisitedCapital(newVisitedCapital)
  }
  
  // function by flag
  const handleVisitedFlag = flag =>{
   const newVisitedFlag = [...visitedFlag, flag]
   setVisitedFlag(newVisitedFlag)
  }
 
  return (
    <div>
      <h2>Countries: {countries.length}</h2>

      {/* visited country */}
      <div>
        <h4>Visited Country: {visitedCountry.length}</h4>
        <ul>
          {
            visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
          }
        </ul>
      </div>

      {/* visited Capital */}
      <div>
        <h3>Visited Capital: {visitedCapital.length} </h3>
        <ul>
          {
            visitedCapital.map(capital =><li key={capital.cca3}>{capital}</li>)
          }
        </ul>
      </div>

      {/* visited flag */}
      <div className="flag-container">
        {
          visitedFlag.map((flag,idx) => <img key={idx} src={flag}></img>)
        }
      </div>

      {/* countries container */}
      <div className="countries-container" >
      {
        countries.map(country=><Country
           key={country.cca3} 
           handleVisitedCountry={handleVisitedCountry}
           handleVisitedCapital={handleVisitedCapital}
           handleVisitedFlag={handleVisitedFlag}
           country={country}></Country>)
      }
      </div>
    </div>
  );
 };
 
 export default Countries;