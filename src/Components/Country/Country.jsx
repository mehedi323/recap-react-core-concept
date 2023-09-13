 import './Country.css'
 const Country = ({country}) => {
  console.log(country)
  const {name, flags, capital, cca3}=country;
  return (
    <div className='country'>
      <h3>Name: {name.common}</h3>
      <h4>Capital: {capital}</h4>
      <h5><small>CCA3: {cca3}</small></h5>
      <img src={flags.png} alt="" />
    </div>
  );
 };
 
 export default Country;