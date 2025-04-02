export default function Card({ name, flag, continent, capital, population }) {
  return (
    <div>
      <img src={flag} alt="flag"></img>
      <div>
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
      <p>Continent: {continent}</p>
      <p>Population: {population}</p>
      </div>
    </div>
  );
}
