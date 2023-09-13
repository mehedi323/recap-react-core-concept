 import { useState } from 'react';
import './Country.css'
 const Country = ({country}) => {
  console.log(country)
  const {name, flags, capital, cca3}=country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () =>{
    setVisited(true);
   }
  return (
    <div className='country'>
      <h3>Name: {name.common}</h3>
      <h4>Capital: {capital}</h4>
      <h5><small>CCA3: {cca3}</small></h5>
      <img src={flags.png} alt="" />
      <button onClick={handleVisited}>Visited:</button>
      {visited? 'I have visited this country.' : 'I want to visited'}
    </div>
  );
 };
 
 export default Country;