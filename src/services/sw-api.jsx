const BASE_URL = 'https://swapi.dev/api';

export function getAllStarships() {
    return fetch(`${BASE_URL}/starships/`).then(res => res.json());
}
function StarshipCard({ starship }) {
    return (
        <div className="starship-card">
            <h2>{starship.name}</h2>
            <p>Model: {starship.model}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Cost: {starship.cost_in_credits} credits</p>
        </div>
    );
}
