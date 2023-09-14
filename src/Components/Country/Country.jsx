 import { useState } from 'react';
 import './Country.css'
 const Country = ({country, handleVisitedCountry, handleVisitedFlag, handleVisitedCapital}) => {
 
  const {name, flags, capital, cca3}=country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () =>{
    setVisited(!visited);
   }
 
  return (
    <div className={`country ${visited ?'visited' : 'none-visited'}`}>
      <h3 style={{color: visited ? 'red': 'white'}}>Name: {name.common}</h3>
      <h4 style={{color: visited ? 'purple': 'white'}} >Capital: {capital}</h4>
      <h5 style={{color: visited ? 'blue': 'white'}} ><small>CCA3: {cca3}</small></h5>
      <img src={flags.png} alt="" />
      <br />
      <br />

      <button onClick={()=> handleVisitedFlag(country.flags.png)}>Add Flag</button>
      <br />
      <br />


      <button onClick={()=> handleVisitedCountry(country)}>Mark Visited</button>
      <br />
      <br />

      <button onClick={()=> handleVisitedCapital(country.capital)}>Add Visited Capital</button>
      <br />
      <br />

      
      <button onClick={handleVisited}>{visited ? 'Visited':'Going'}</button>
      {visited? 'I have visited this country.' : 'I want to visited'}
    </div>
  );
 };
 
 export default Country;