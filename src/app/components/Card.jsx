export default function Card({ name, flag, continent, capital, population }) {
  return (
    <div className="inline-block border w-52 m-4">
      <div className="h-36 flex items-center">
        <img className="" src={flag} alt="flag"></img>
      </div>
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm">Capital: {capital}</p>
        <p className="text-sm">Continent: {continent}</p>
        <p className="text-sm">Population: {population}</p>
      </div>
    </div>
  );
}
